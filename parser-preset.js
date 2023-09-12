/**
 * Add `emoji` part for the parser.
 * Pattern: type[(scope)]: [:emoji:] subject
 */
const emojiRegex = require('emoji-regex')

const rType = /^(\w*)/
const rScope = /(?:\(([\w$.\-*/ ]*)\))?: /
const rEmoji = `(${emojiRegex().source})`
const rSubject = / (.*)$/

module.exports = {
  emojiRegex,
  parserOpts: {
    headerPattern: new RegExp(
      rType.source + rScope.source + rEmoji + rSubject.source
    ),
    headerCorrespondence: ['type', 'scope', 'emoji', 'subject'],
  },
}
