import React, { useState } from 'react'

function Square({value, onSquareClick, highlight}) {
  return <button className={`square ${highlight ? "highlight" : ""}`} onClick={onSquareClick}>{value}</button>;
}

function Board({xIsNext, squares, onPlay, currentMove}) {
  const alignSquares = [];
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares, i);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (currentMove === 9) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        alignSquares.push(a, b, c);
        return squares[a];
      }
    }
    return null;
  }


  const rows = [];
  for (let i = 0; i < 3; i++) {
    const cols = [];
    for (let j = 0; j < 3 ; j++) {
      const index = i * 3 + j;
      cols.push(<Square value={squares[index]} onSquareClick={() => handleClick(index)} highlight={alignSquares.includes(index)} key={index}/>)
    }
    rows.push(<div className="board-row" key={i}>{cols}</div>)
  }

  return (
    <div>
      <div className="status">{status}</div>
      {rows}
    </div>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [moveHistory, setMoveHistory] = useState([[0, 0]]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAsc, setIsAsc] = useState(true);
  const xIsNext = (currentMove % 2) === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares, index) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setMoveHistory([...moveHistory, [Math.trunc(index / 3) + 1, Math.trunc(index % 3) + 1]]);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    if (currentMove === move) {
      return (
        <li key={move}>You are at move #{currentMove} ({moveHistory[move][0]}, {moveHistory[move][1]})</li>
      )
    }
    let discription;
    if (move > 0) {
      discription = 'Go to move # ' + move;
    } else {
      discription = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{discription}</button>
        <span>({moveHistory[move][0]}, {moveHistory[move][1]})</span>
      </li>
    )
  })

  const sortedMoves = isAsc ? moves : moves.slice().reverse();

  function onToggleClick() {
    setIsAsc(!isAsc);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
      </div>
      <div className="game-info">
        <div className="toggle_button">
          <input id="toggle" className="toggle_input" type='checkbox' onClick={onToggleClick} />
          <label htmlFor="toggle" className="toggle_label" />
        </div>
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  )
}
