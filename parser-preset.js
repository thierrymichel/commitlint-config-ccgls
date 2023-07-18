/**
 * Add `emoji` part for the parser.
 * Pattern: type[(scope)]: [:emoji:] subject
 */
module.exports = {
  parserOpts: {
    headerPattern: /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: (.*)?( -- .*)?$/,
    headerCorrespondence: ['type', 'scope', 'emoji', 'subject'],
  },
}
