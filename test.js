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
console.log('🗃️', '🗃', '🗃️' === '🗃')
console.log('🗃️'.length, '🗃'.length)
console.log('🗃️'.length)

const e = '🗃️'.split('')

e.pop()

console.log('🗃️'.split('')[0] === '🗃')
console.log(e.join(''), e.join('') === '🗃')

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
console.log('refactor(app:filters): 🗃 remove unused data'.match(headerPattern))
console.log(
  'refactor(app:filters): 🏷 Move DashboardData interface'.match(headerPattern)
)
