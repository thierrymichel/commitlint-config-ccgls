# commitlint-config-ccgls

> [Commitlint](https://github.com/marionebl/commitlint) companion for [cz-ccgls](https://github.com/thierrymichel/cz-ccgls) (a commitizen adapter to deal with conventional changelog, Gitmoji and Lerna scopes).

[![npm version](https://img.shields.io/npm/v/commitlint-config-ccgls.svg?style=flat-square)](https://www.npmjs.org/package/commitlint-config-ccgls)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![License](https://img.shields.io/badge/license-UNLICENSE-green.svg?style=flat-square)](https://github.com/thierrymichel/commitlint-config-ccgls/blob/master/UNLICENSE)

## Usage

```sh
# Install commitlint cli
npm install --save-dev @commitlint/cli
# Install ccgls
npm install --save-dev commitlint-config-ccgls
# Configure commitlint to use ccgls
echo "module.exports = {extends: ['commitlint-config-ccgls']}" > commitlint.config.js
```

> More informations about [Commitlint](https://github.com/marionebl/commitlint)…
