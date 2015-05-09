import React from 'react'
import Input from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<Input {...data} />, document.getElementById('app'))
