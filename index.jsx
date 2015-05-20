import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
import omit from 'lodash/object/omit'
// we can't use destructring becuase there's a babel bug https://github.com/babel/babel/issues/1509
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'input'

export default class InputField extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    const inputProps = omit(this.props, 'label')

    // force iOS to use the numeric keyboard if the type is number
    // http://danielfriesen.name/blog/2013/09/19/input-type-number-and-ios-numeric-keypad/
    if (inputProps.type === 'number') {
      inputProps.inputmode = 'numeric'
      inputProps.pattern = '[0-9]*'
    }

    //todo: setup a classNames for each input type.
    //let typeClass = this.props.typeClass || ''
    return (
      <label className={namespace}>
        <span className={`${namespace}-label`}>{this.props.label}</span>
        <input {...inputProps} />
      </label>
    )
  }
}

InputField.propTypes = {
  type: PropTypes.string.isRequired
  , label: PropTypes.string
  , name: PropTypes.string
}
