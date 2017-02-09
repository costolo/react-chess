import React, { Component } from 'react'
import { ItemTypes } from '../Contants'
import { DragSource } from 'react-dnd'
const { func, bool } = React.PropTypes

class Pawn extends Component {
  render () {
    return <div class='piece'>♙</div>
  }
}

export default Pawn
