import React from 'react';
import Lives from './lives';
import Letters from './letters';
import Start from './start';
import Word from './word';


export default function Layout({
    lives, maskedWords, guess, start, isRunning
}) {
    return (
        <>
            <div className='game-wrapper'>
                {isRunning && <>
                    <div className='left-pane'>
                        <Lives livesLeft={lives} > </Lives>
                    </div>
                    <div className='right-pane'>
                        <div className='lives'>
                            Lives: {lives}
                        </div>
                        <Word  maskedWords={maskedWords}> </Word>
                        <Letters playedLetters={new Set()} onSelect={guess}></Letters>
                    </div>

                </>}

                
                    <Start onStart={start} isRunning={isRunning}></Start>
                
                {/* {isWon && <>
                    <div>You Won ! </div>
                </>} */}
            </div>

        </>
    )
}