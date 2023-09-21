import React, { useState } from 'react'

import TicTacToe from './TicTacToe'
import FoodList from './FoodList'

export default function App() {
  return (
    <div>
      <h1>React Tic Tac Toe</h1>
      <TicTacToe />

      <h1>Thinking in React</h1>
      <FoodList />
    </div>
  )
}
