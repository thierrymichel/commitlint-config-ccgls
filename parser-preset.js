/* eslint-disable capitalized-comments, max-len */
/**
 * Add `emoji` part for the parser.
 * Pattern: type[(scope)]: [:emoji:] subject
 */

// const emojiRegex = require('emoji-regex')

const rType = /^(\w*)/
const rScope = /(?:\(([\w$.\-*/ ]*):*?([\w$.\-*/]*)\))?: /
// const rEmoji = `(${emojiRegex().source})`
const rSubject = /\s(.*)$/

// TODO: upgrade to last version of commitlint and fetch emojis
// + manage "complex" emojis like ⏪️ ou ⬆️/⬆
// prettier-ignore
const originals = ['🎨', '⚡️', '🔥', '🐛', '🚑️', '✨', '📝', '🚀', '💄', '🎉', '✅', '🔒️', '🔐', '🔖', '🚨', '🚧', '💚', '⬇️', '⬆️', '📌', '👷', '📈', '♻️', '➕', '➖', '🔧', '🔨', '🌐', '✏️', '💩', '⏪️', '🔀', '📦️', '👽️', '🚚', '📄', '💥', '🍱', '♿️', '💡', '🍻', '💬', '🗃️', '🔊', '🔇', '👥', '🚸', '🏗️', '📱', '🤡', '🥚', '🙈', '📸', '⚗️', '🔍️', '🏷️', '🌱', '🚩', '🥅', '💫', '🗑️', '🛂', '🩹', '🧐', '⚰️', '🧪', '👔', '🩺', '🧱', '🧑‍💻', '💸', '🧵', '🦺']

function getVariations(emoji) {
  const variations = [emoji]
  const split = emoji.split('')
  let i = split.length - 1
  while (i > 0) {
    split.pop()
    variations.push(split.join(''))
    i -= 1
  }

  return variations
}

const variations = [
  ...new Set(
    originals.reduce((acc, emoji) => {
      const v = getVariations(emoji)

      return [...acc, ...v]
    }, [])
  ),
]

const rEmoji = `(${variations.join('|')})`

module.exports = {
  parserOpts: {
    headerPattern: new RegExp(
      rType.source + rScope.source + rEmoji + rSubject.source
    ),
    headerCorrespondence: ['type', 'scope', 'branch', 'emoji', 'subject'],
  },
}
