// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const path = require('path');
const _ = require('lodash');
const mkdirp = require('mkdirp');

const { commonFilesWriter } = require('./commonFilesWriter');
const { BOT_TEMPLATE_NAME_EMPTY, BOT_TEMPLATE_NOPROMPT_EMPTY } = require('./constants');

// generators/app/templates folder name
const GENERATOR_TEMPLATE_NAME = 'empty';

/**
 * Write the files that are specific to the empty bot template
 *
 * @param {Generator} gen Yeoman's generator object
 * @param {String} templatePath file path to write the generated code
 */
const writeEmptyTemplateFiles = (gen, templatePath) => {
  // const DEPLOYMENT_SCRIPTS = 0;
  // const DEPLOYMENT_MSBOT = 1;
  // const RESOURCES = 2;
  const TS_SRC_FOLDER = 'src'
  // const folders = [
  //   'deploymentScripts',
  //   path.join('deploymentScripts', 'msbotClone'),
  //   'resources'
  // ];
  const extension = _.toLower(gen.props.language) === 'javascript' ? 'js' : 'ts';
  const srcFolder = _.toLower(gen.props.language) === 'javascript' ? '' : TS_SRC_FOLDER;

  // create the echo bot folder structure common to both languages
  // for (let cnt = 0; cnt < folders.length; ++cnt) {
  //   mkdirp.sync(folders[cnt]);
  // }
  // create a src directory if we are generating TypeScript
  if (_.toLower(gen.props.language) === 'typescript') {
    mkdirp.sync(TS_SRC_FOLDER);
  }

  // write out the deployment scripts
  // let sourcePath = path.join(templatePath, folders[DEPLOYMENT_MSBOT]);
  // let destinationPath = path.join(gen.destinationPath(), folders[DEPLOYMENT_MSBOT]);
  // // gen.fs.copyTpl(
  //   path.join(sourcePath, 'bot.recipe'),
  //   path.join(destinationPath, 'bot.recipe'),
  //   {
  //     botName: gen.props.botName
  //   }
  // );

  // write out the index.js and bot.js
  let destinationPath = path.join(gen.destinationPath(), srcFolder);

  // gen the main index file
  gen.fs.copyTpl(
    gen.templatePath(path.join(templatePath, `index.${extension}`)),
    path.join(destinationPath, `index.${extension}`),
    {
      botname: gen.props.botname
    }
  );
  // gen the main bot activity router
  gen.fs.copy(
    gen.templatePath(path.join(templatePath, `bot.${extension}`)),
    path.join(destinationPath, `bot.${extension}`)
  );

  // // write out the  AI resource(s)
  // sourcePath = path.join(templatePath, folders[RESOURCES]);
  // destinationPath = path.join(gen.destinationPath(), folders[RESOURCES]);
  // gen.fs.copy(
  //   path.join(sourcePath, `echo.chat`),
  //   path.join(destinationPath, `echo.chat`)
  // );
}

/**
 * Write project files for Echo template
 *
 * @param {Generator} gen Yeoman's generator object
 */
module.exports.emptyTemplateWriter = gen => {
  // do some simple sanity checking to ensure we're being
  // called correctly
  const template = _.toLower(gen.props.template)
  if (template !== _.toLower(BOT_TEMPLATE_NAME_EMPTY) && template !== _.toLower(BOT_TEMPLATE_NOPROMPT_EMPTY)) {
    throw new Error(`basicTemplateWriter called for wrong template: ${ gen.props.template }`);
  }

  // build the path to the echo template source folder
  const templatePath = path.join(gen.templatePath(), GENERATOR_TEMPLATE_NAME);

  // write files common to all our template options
  commonFilesWriter(gen, templatePath);

  // write files specific to the echo bot template
  writeEmptyTemplateFiles(gen, templatePath);
}

