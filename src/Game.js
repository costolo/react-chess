import { ItemTypes } from './Constants'
import Knight from './pieces/Knight'

let knightPosition = Knight.positions.white[0]
let observer = null

function emitChange (itemType) {
  switch (itemType) {
    case 'knight':
      observer(knightPosition)
      break
    default:
      console.log('default in emit change switch')
  }
}

export function observe (o) {
  if (observer) {
    throw new Error('multiple observers not implements')
  }

  observer = o
  emitChange(ItemTypes.KNIGHT)
}

// TODO abstract piece movement into its own module
export function canMoveKnight (toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export function moveKnight (toX, toY) {
  knightPosition = [toX, toY]
  emitChange(ItemTypes.KNIGHT)
}
