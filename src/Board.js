import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import Knight from './pieces/Knight'
import { moveKnight, canMoveKnight } from './Game'
import { pieces } from './PiecePositions'
const { arrayOf, number } = React.PropTypes

class Board extends Component {
  static propTypes = {
    knightPosition: arrayOf(
      number.isRequired
    ).isRequired
  }

  handleSquareClick (toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  renderPiece (x, y) {
    const [knightX, knightY] = this.props.knightPosition

    if (x === knightX && y === knightY) return <Knight />
  }

  renderSquare (i) {
    const x = i % 8
    const y = Math.floor(i / 8)

    return (
      <div key={i}
        style={{ width: '12.5%', height: '12.5%'}}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)} 
        </BoardSquare>
      </div>
    )
  }

  render () {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i))
    }

    return (
      <div className='board'>
        {squares}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)

