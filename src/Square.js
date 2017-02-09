import React, { Component } from 'react'
const { bool } = React.PropTypes

export default class Square extends Component {
  static propTypes = {
    black: bool
  }

  render () {
    const { black } = this.props 
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
      <div style={{
          backgroundColor: fill,
          color: stroke
        }}
        className='square'>
        {this.props.children}
      </div>
    )
  }
}
