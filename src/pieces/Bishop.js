import React, { Component } from 'react'
import { ItemTypes } from '../Contants'
import { DragSource } from 'react-dnd'
const { func, bool } = React.PropTypes

class Bishop extends Component {
  render () {
    return <div className='piece'>♗</div>
  }
}

export default Bishop
