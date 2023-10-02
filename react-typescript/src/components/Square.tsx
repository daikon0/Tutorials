import style from '../styles/Square.module.css';

interface SquareProps {
    value: string;
    onSquareClick: () => void;
    highlight: boolean;
}

export default function Square({ highlight, value, onSquareClick }: SquareProps) {
    const isDisabled = value !== '-';
    return (
        <button
            className={`${style.square} ${highlight && style.highlighted}`}
            onClick={onSquareClick}
            disabled={isDisabled}>{value}</button>
    );
}