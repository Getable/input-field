import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import Input from '../index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('Input: constructor', (t) => {
  const input = React.createElement(Input)
  t.ok(
    isElement(input)
    , 'is a valid react component'
  )

  t.end()
})
