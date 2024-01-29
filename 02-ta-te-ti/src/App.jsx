import { useState } from 'react';

import { Board } from './components/Board.jsx';
import { Turn } from './components/Turn.jsx';
import { WinnerModal } from './components/WinnerModal.jsx';

import { TURNS } from './constants.js';
import { removeSaveGame } from './logic/board.js';

export const App = () => {

    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board');
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    });
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn');
        return turnFromStorage ?? TURNS.X;
    });
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        removeSaveGame();
    };

    return (
        <main className='board'>
            <h1>Ta Te Ti</h1>
            <button onClick={resetGame}>Reset Game</button>
            <Board 
                board={board} 
                setBoard={setBoard}
                winner={winner} 
                setWinner={setWinner} 
                turn={turn} 
                setTurn={setTurn}
            />
            <Turn turn={turn}/>
            <WinnerModal winner={winner} resetGame={resetGame}/>
        </main>
    )
};