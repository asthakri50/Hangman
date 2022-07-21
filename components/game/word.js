import React from 'react';

export default function Word({
    maskedWords
}) {
    return (
        <div className='display-flex justify-content-around word-flex'>
            {maskedWords.map((letter) => (

                    <div className='word'>
                        &nbsp;{letter} &nbsp;
                    </div>


    

            ))}
        </div>
    )
}