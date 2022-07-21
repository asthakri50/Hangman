import React, { useState } from 'react';
import Layout from './layout';
import { createSession, playInSession } from "../../api/sessions";


export default function Game() {
   
    const [session, setSession] = useState(null);
    const guess = async (letter) => {
        const updatedSession = await playInSession(session.id, letter);
        setSession(updatedSession);
    }

    const isRunning = !!session;

    const start = async (name) => {
        const session = await createSession(name);
        setSession(session);
       
    }

    return (
        <>
            <Layout
                start={start}
                isRunning={isRunning}
                guess={guess}
                lives={session.livesLeft}
                maskedWords={session.maskedWord}
            />
        </>
    )
}