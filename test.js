/* eslint-disable max-len */
const { parserOpts } = require('./parser-preset.js')

const { headerPattern } = parserOpts

// console.log('fix: 🐛 fix a bug'.match(headerPattern))
// console.log('fix(app): 🐛 fix a bug'.match(headerPattern))

// console.log('fix: ⏪ fix a bug'.match(headerPattern))
// console.log('fix(app): ⏪ fix a bug'.match(headerPattern))

// /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: [#*0-9]\uFE0F?
// \uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?) (.*)$/

// /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: (\/[#*0-9]\uFE0F?
// \uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)\/g{1}) (.*)$/

// \uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)

// const regex = emojiRegex()
console.log('RRRRRRRR', headerPattern)
// console.log('RRRRRRRR', regex.source)

// console.log('fix: 🩹 add subject if no emoji'.match(headerPattern))
console.log('fix: ⏪️ revert to custom eases'.match(headerPattern))
console.log('chore(app:envs): 🚨 fix linter comments'.match(headerPattern))
console.log(
  'feat(app:envs): ✨ add client env management [#64]'.match(headerPattern)
)
console.log(
  'chore(app:filters): ⬆ upgrade commitlint deps'.match(headerPattern)
)
console.log('imp(app:filters): 🚧 switch to nanostores'.match(headerPattern))
console.log(
  'fix(app:feature-filters/fix): 🐛 fix too many parsing'.match(headerPattern)
)
// console.log(': ⏪️ r' === ': ⏪ r')
// console.log('⏪️'.split(''), '⏪️'.length)
// console.log('⏪'.split(''), '⏪'.length)

// console.log(/\s/.test(' '))
// console.log(/\s/.test('⏪️'))
// console.log('⏪️'.split(''), '⏪️'.split('')[1] === '️')

// The character U+fe0f is invisible

// console.log('fix: ⏪ add subject if no emoji'.match(regex))
// console.log('fix: 🩹 add subject if no emoji'.match(regex))

// console.log('fix: ⏪ add subject if no emoji'.match(re))
// console.log('fix: 🩹 add subject if no emoji'.match(re))

// console.log('TEST', regex.test('🩹'))
// console.log('TEST', re.test('fix: 🩹 add subject if no emoji'))

// const re =
//   /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: (🎨|⚡️|🔥|🐛|🚑️|✨|📝|🚀|💄|🎉|✅|🔒️|🔐|🔖|🚨|🚧|💚|⬇️|⬆️|📌|👷|📈|♻️|➕|➖|🔧|🔨|🌐|✏️|💩|⏪️|🔀|📦️|👽️|🚚|📄|💥|🍱|♿️|💡|🍻|💬|🗃️|🔊|🔇|👥|🚸|🏗️|📱|🤡|🥚|🙈|📸|⚗️|🔍️|🏷️|🌱|🚩|🥅|💫|🗑️|🛂|🩹|🧐|⚰️|🧪|👔|🩺|🧱|🧑‍💻|💸|🧵|🦺)\s(.*)$/

// console.log('👀', '⏪️'.match(/⏪️/))
// console.log('👀', '⏪️ '.match(/⏪️\s(.*)$/))
// console.log('👀', 'fix: ⏪️ '.match(re))
// console.log('👀', 'fix(app): ⏪️ message'.match(re))
