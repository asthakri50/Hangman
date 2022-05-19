import React, { useState } from 'react';
import Lives from './lives';
import Letters from './letters';
import Start from './start';
import Word from './word';


const MAX_LIVES = 6;

export default function Game() {

    const [actualWord, setActualWord] = useState("");
    const [playedLetters, setPlayedLetters] = useState([]);

    const word_set = new Set([...actualWord]);
    const played_set = new Set([...playedLetters]);
    const wrongLetters = playedLetters.filter((letter)=>{
        return !word_set.has(letter) ;
    })
    const lives = MAX_LIVES - wrongLetters.length;
    const isRunning = lives && actualWord ;
    const isWon = isRunning && lives &&   [...word_set].reduce((acc, curr) => {
        if (!played_set.has(curr)) return false;

        return acc;
    }, true);

    const guess = letter => {
        setPlayedLetters((prev) => [...prev, letter])
    }

    const start = () => {
        setActualWord("house");
        setPlayedLetters([]);
    }

    return (
        <>
            {isRunning && <>
                <Lives livesLeft={lives} > </Lives>
                <Word actualWord={actualWord} playedLetters={played_set}> </Word>
                <Letters playedLetters={played_set} onSelect={guess}></Letters>
            </>}

            <Start onStart={start}></Start>
            {isWon && <>
                <div>You Won ! </div>
            </>}
        </>
    )
}