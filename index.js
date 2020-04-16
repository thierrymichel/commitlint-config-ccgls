const importFrom = require('import-from');
const config = require('@commitlint/config-conventional');
const readPkg = require('read-pkg-up');
const [,, types] = config.rules['type-enum'];

/**
 * Load cz-ccgls config
 *
 * @param {*} context for the current working directory
 * @returns {array} project scopes + 'root'
 */
const getConfig = obj => obj &&
  obj.config &&
  obj.config['cz-ccgls'] &&
  obj.config['cz-ccgls'].useScopes !== false &&
  obj.config['cz-ccgls'].additionalScopes

/**
 * Get lerna scopes
 *
 * @param {*} context for the current working directory
 * @returns {array} project scopes + 'root'
 */
async function getScopes(context) {
  const ctx = context || {};
  const cwd = ctx.cwd || process.cwd();
  const scopes = ['release', 'root'];

  // Lerna packages
  const Project = importFrom(cwd, '@lerna/project');
  const project = new Project(cwd);
  const lernaPkg = await project.getPackages();
  const lernaScopes = lernaPkg
    .map(pkg => pkg.name)
    .map(name => name.charAt(0) === '@' ? name.split('/')[1] : name)

  // "Main" package with config
  const { packageJson: mainPkg } = await readPkg()
  const configScopes = getConfig(mainPkg) || []

  return [...new Set(
    scopes.concat(lernaScopes).concat(configScopes)
  )];
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  utils: { getScopes },
  rules: {
    'type-enum': [2, 'always', types.concat(['imp'])],
    'scope-enum': ctx =>
      getScopes(ctx).then(scopes => [2, 'always', scopes]),
  },
};
