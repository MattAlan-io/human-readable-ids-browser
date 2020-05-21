# Human Readable IDs - Browser

A tiny library for generating human readable IDs in the browser.

This library creates ids which are:
 - Readable to humans: all words simple valid words in the english language
 - Audibly unambigous: simple words are used which do not sound like other words, so that they can be read aloud and entered by other humans
 - Clean: no profanity

To generate, we use json files containing animals and adjectives (values/animals.json, values/adjectives.json). Using the built in JS random function, two words are selected and joined with either the default delimiter ('-'), or a custom one if passed.

This library was based on the great work at https://git.coolaj86.com/coolaj86/human-readable-ids.js#readme and follows the same principles - but re-written for the browser instead of requiring bower to transpile.

---
## Requirements

For development, you will only need Node.js and npm.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.4.0

    $ npm --version
    6.9.0

## Install

    $ git clone https://github.com/MattAlan-io/human-readable-ids-browser
    $ cd human-readable-ids-browser
    $ npm install

## Building the library

    $ npm run build

## Testing

    $ npm test