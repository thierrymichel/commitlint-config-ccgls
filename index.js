const importFrom = require('import-from');
const config = require('@commitlint/config-conventional');
const [,, types] = config.rules['type-enum'];

/**
 * Get lerna scopes
 *
 * @param {*} context for the current working directory
 * @returns {array} project scopes + 'root'
 */
async function getScopes(context) {
  const ctx = context || {};
  const cwd = ctx.cwd || process.cwd();
  const Project = importFrom(cwd, '@lerna/project');
  const project = new Project(cwd);
  const packages = await project.getPackages();

  return packages
    .map(pkg => pkg.name)
    .map(name => name.charAt(0) === '@' ? name.split('/')[1] : name)
    .concat(['root']);
}

module.exports = {
  utils: { getScopes },
  rules: {
    'type-enum': [2, 'always', types.concat(['imp'])],
    'scope-enum': ctx =>
      getScopes(ctx).then(scopes => [2, 'always', scopes]),
  },
};
