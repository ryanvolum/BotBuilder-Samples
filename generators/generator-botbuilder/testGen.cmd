#!/bin/bash

#
# Empty bot in TypeScript
#
echo Generating my-empty-bot-ts
yo botbuilder -N "my-empty-bot-ts" -D "An empty bot in ts" -L "TypeScript" -T "empty" --noprompt
cd ./my-empty-bot-ts
echo building and linting my-empty-bot-ts
npm run build && npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-empty-bot-ts

#
# Empty bot in JavaScript
#
echo Generating my-empty-bot-js
yo botbuilder -N "my-empty-bot-js" -D "An empty bot in js" -L "JavaScript" -T "empty" --noprompt
cd ./my-empty-bot-js
echo linting my-empty-bot-js
npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-empty-bot-js

#
# Echo bot in TypeScript
#
echo Generating my-echo-bot-ts
yo botbuilder -N "my-echo-bot-ts" -D "An echo bot in ts" -L "TypeScript" -T "echo" --noprompt
cd ./my-echo-bot-ts
echo building and linting my-echo-bot-ts
npm run build && npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-echo-bot-ts


#
# Echo bot in JavaScript
#
echo Generating my-echo-bot-js
yo botbuilder -N "my-echo-bot-js" -D "An echo bot in js" -L "JavaScript" -T "echo" --noprompt
cd ./my-echo-bot-js
echo linting my-echo-bot-js
npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-echo-bot-js


#
# Basic bot in TypeScript
#
echo Generating my-basic-bot-ts
yo botbuilder -N "my-basic-bot-ts" -D "An basic bot in ts" -L "TypeScript" -T "basic" --noprompt
cd ./my-basic-bot-ts
echo building and linting my-basic-bot-ts
npm run build && npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-basic-bot-ts


#
# Basic bot in JavaScript
#
echo Generating my-basic-bot-js
yo botbuilder -N "my-basic-bot-js" -D "An basic bot in js" -L "JavaScript" -T "basic" --noprompt
cd ./my-basic-bot-js
echo linting my-basic-bot-js
npm run lint
cd ..
echo Cleaning up...
rm -rf ./my-basic-bot-js
