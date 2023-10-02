import Square from "./Square";
import style from '../styles/Board.module.css';

interface BoardProps {
    winner: string;
    setWinner: (winner: string) => void;
    squares: string[][];
    setSquares: (squares: string[][]) => void;
    xIsNext: boolean;
    setXIsNext: (xIsNext: boolean) => void;
    sameSquares: Array<Array<number>> | null;
    setSameSquares: (sameSquares: Array<Array<number>>) => void;
}

export default function Board({ winner, setWinner, squares, setSquares, xIsNext, setXIsNext, sameSquares, setSameSquares }: BoardProps) {
    const symbol = xIsNext ? 'X' : 'O';
    function handleClick(row: number, col: number) {
        if (winner !== '') {
            return;
        }
        const newSquares = [...squares];
        newSquares[row][col] = symbol;
        setSquares(newSquares);
        if (sameSymbolRow(row, symbol) || sameSymbolCol(col, symbol) || sameSymbolDiagonal(symbol)) {
            setWinner(symbol);
        }
        setXIsNext(!xIsNext);
    }
    function sameSymbolRow(row: number, mark: string) {
        if (squares[row].every(square => square === mark)) {
            setSameSquares([[row, 0], [row, 1], [row, 2]]);
            return true;
        }
        return false;
    }
    function sameSymbolCol(col: number, mark: string) {
        if (squares.every(row => row[col] === mark)) {
            setSameSquares([[0, col], [1, col], [2, col]]);
            return true;
        }
        return false;
    }
    function sameSymbolDiagonal(symbol: string) {
        if (squares[0][0] === symbol && squares[1][1] === symbol && squares[2][2] === symbol) {
            setSameSquares([[0, 0], [1, 1], [2, 2]]);
            return true;
        }
        if (squares[0][2] === symbol && squares[1][1] === symbol && squares[2][0] === symbol) {
            setSameSquares([[0, 2], [1, 1], [2, 0]]);
            return true;
        }
        return false;
    }
    function isHighlightSquare(rowIndex: number, colIndex: number) {
        if (sameSquares) {
            return sameSquares.some(sameSquare => sameSquare[0] === rowIndex && sameSquare[1] === colIndex);
        }
        return false
    }

    const board = squares.map((row, rowIndex) => {
        return (
            <div className={style.board_row} key={rowIndex}>
                {row.map((square, colIndex) =>
                    <Square
                        highlight={isHighlightSquare(rowIndex, colIndex)}
                        value={square} onSquareClick={() => handleClick(rowIndex, colIndex)}
                        key={colIndex} />
                )}
            </div>
        );
    })

    return (
        <>
            {board}
        </>
    );
}