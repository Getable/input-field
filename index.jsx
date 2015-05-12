import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'input-field'

export default class InputField extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    //todo: setup a classNames for each input type.
    //let typeClass = this.props.typeClass || ''
    return (
      <label className={namespace}>
        <span className={`${namespace}-label`}>{this.props.label}</span>
        <input name={this.props.name} type={this.props.type}></input>
      </label>
    )
  }
}

InputField.propTypes = {
  type: PropTypes.string.isRequired
, label: PropTypes.string
, name: PropTypes.string
}
