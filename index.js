#!/usr/bin/env node
const { WebClient } = require('@slack/client');
const argv = require('minimist')(process.argv.slice(2));

const web = new WebClient(argv.token);
web.chat.postMessage({ channel: argv.channel, text: argv.text })
      .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
      })
      .catch(console.error);
