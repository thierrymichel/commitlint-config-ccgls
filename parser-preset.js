/* eslint-disable capitalized-comments, max-len */
/**
 * Add `emoji` part for the parser.
 * Pattern: type[(scope)]: [:emoji:] subject
 */

// const emojiRegex = require('emoji-regex')

// const rType = /^(\w*)/
// const rScope = /(?:\(([\w:$.\-*/ ]*)\))?: /
// const rEmoji = `(${emojiRegex().source})`
// const rSubject = /\s(.*)$/

module.exports = {
  parserOpts: {
    // headerPattern: new RegExp(
    //   rType.source + rScope.source + rEmoji + rSubject.source
    // ),
    // TODO: upgrade to last version of commitlint and fetch emojis
    // + manage "complex" emojis like ⏪️ ou ⬆️/⬆
    headerPattern:
      /^(\w*)(?:\(([\w$.\-*/ ]*):*?([\w]*)\))?: (🎨|⚡️|🔥|🐛|🚑️|✨|📝|🚀|💄|🎉|✅|🔒️|🔐|🔖|🚨|🚧|💚|⬇️|⬆️|📌|👷|📈|♻️|➕|➖|🔧|🔨|🌐|✏️|💩|⏪️|🔀|📦️|👽️|🚚|📄|💥|🍱|♿️|💡|🍻|💬|🗃️|🔊|🔇|👥|🚸|🏗️|📱|🤡|🥚|🙈|📸|⚗️|🔍️|🏷️|🌱|🚩|🥅|💫|🗑️|🛂|🩹|🧐|⚰️|🧪|👔|🩺|🧱|🧑‍💻|💸|🧵|🦺|�|⚡|�|⬇|⬆|♻|✏|⏪|♿|�|⚗|⚰)\s(.*)$/,
    headerCorrespondence: ['type', 'scope', 'branch', 'emoji', 'subject'],
  },
}
