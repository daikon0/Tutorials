import { useState } from "react";
import Board from "./Board";

export default function TicTacToe() {
    const [squares, setSquares] = useState([Array(3).fill('-'), Array(3).fill('-'), Array(3).fill('-')]);
    const [winner, setWinner] = useState('');
    const [xIsNext, setXIsNext] = useState(true);
    const [sameSquares, setSameSquares] = useState<Array<Array<number>> | null>(null);
    const win = winner ? <div>{winner} wins!</div> : <div></div>;
    function reset() {
        setSquares([Array(3).fill('-'), Array(3).fill('-'), Array(3).fill('-')]);
        setWinner('');
        setXIsNext(true);
        setSameSquares(null);
    }
    return (
        <div>
            <h1>Tic Tac Toe</h1>

            <button onClick={reset}>Reset</button>
            <Board
                winner={winner}
                setWinner={setWinner}
                squares={squares}
                setSquares={setSquares}
                xIsNext={xIsNext}
                setXIsNext={setXIsNext}
                sameSquares={sameSquares}
                setSameSquares={setSameSquares}
            />
            {win}
        </div>
    );
}