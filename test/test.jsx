import test from 'tape'
import @getable-input-field from '../index.js'

test('@getable-input-field#get', (t) => {
  t.plan(2)

  t.doesNotThrow(
    @getable-input-field.get
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
