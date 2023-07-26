/**
 * Add `emoji` part for the parser.
 * Pattern: type[(scope)]: [:emoji:] subject
 */
const emojiRegex = require('emoji-regex')

const rType = /^(\w*)/
const rScope = /(?:\(([\w$.\-*/ ]*)\))?: /
const rEmoji = new RegExp(`(${emojiRegex()}{1})`)
const rSubject = / (.*)$/

module.exports = {
  parserOpts: {
    headerPattern: new RegExp(
      rType.source + rScope.source + rEmoji.source + rSubject.source
    ),
    headerCorrespondence: ['type', 'scope', 'emoji', 'subject'],
  },
}
