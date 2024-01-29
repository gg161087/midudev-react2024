import confetti from 'canvas-confetti';

import { Square } from './Square.jsx';

import { TURNS } from '../constants.js';
import { checkWinner, checkEndGame, saveGame } from './../logic/board.js';

export const Board = ({ board, setBoard, winner, setWinner, turn, setTurn }) => {

    const updateBoard = (index) => { 
        if (board[index] || winner) return;
        const newBoard = [...board]; 
        newBoard[index] = turn; 
        setBoard(newBoard);     
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn);
        saveGame(newBoard, newTurn);
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        };
    };

    return (
        <section className='game'>
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {square}
                        </Square>
                    )
                })
            }
        </section>
    )
};