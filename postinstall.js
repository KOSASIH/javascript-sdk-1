/* eslint-env node */
/* eslint-disable no-console */
'use strict';

const chalk = require('chalk');
const axios = require('axios');
const semver = require('semver');

const {version} = require('./package');

const primaryColor = (text) => chalk.yellow(text);
const highlight = (text) => chalk.cyan.bold(text);

axios.get('https://registry.npmjs.org/@smartcar/auth')
  .then(function(response) {
    const body = response.data;

    const {latest} = body['dist-tags'];

    if (semver.gt(latest, version)) {
      console.warn(
        primaryColor('\nYour Smartcar JavaScript SDK is outdated! Please update by running:\n'),
        highlight('> npm i @smartcar/auth@latest\n'),
      );
    }
  })
  .catch(function() {
    // let's not cause unhandled rejections :)
    return;
  });
