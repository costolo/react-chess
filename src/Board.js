import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import Knight from './pieces/Knight'
import { moveKnight, canMoveKnight } from './Game'
// import { pieces } from './PiecePositions'
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
    const [wN1X, wN1Y] = this.props.knightPosition
    // const [wN1X, wN1Y] = pieces.knight.white[0]
    // const [wN2X, wN2Y] = pieces.knight.white[1]

    // if ((x === wN1X && y === wN1Y) ||
      // (x === wN2X && y === wN2Y)) {
      // return <Knight />
    // }

    if (x === wN1X && y === wN1Y) {
      return <Knight x={x} y={y} />
    }
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

