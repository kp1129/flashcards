import React, { useState, useRef, useEffect } from 'react'
import "./Flashcard.css"

export default function Flashcard({ flashcards, setFlashcards }) {
    // toggles front and back view
    const [displayFront, setDisplayFront] = useState(true)
    // flashcard content
    const [term, setTerm] = useState("")
    const [definition, setDefinition] = useState("")

    const definitionInput = useRef(null)

    const flipCard = (e) => {
        e.preventDefault();
        setDisplayFront(false);
    }

    const submitCard = (e) => {
        e.preventDefault();
        setFlashcards([...flashcards, { term, definition }])
        setTerm("")
        setDefinition("")
        setDisplayFront(true);
    }
    useEffect(() => {
        if (!displayFront) definitionInput.current.focus();
        // return () => {
        //     definitionInput.current = null;
        // }
    }, [displayFront])
    return (
        <div className="flashcard">
            <div className={`front ${displayFront ? "" : "hidden"}`}>
                <form onSubmit={flipCard}>
                    <label htmlFor="term" className="screen-reader-text">Enter vocabulary term</label>
                    <input type="text" name="term" placeholder="Term" value={term} onChange={(e) => setTerm(e.target.value)} autoFocus/>
                </form>
            </div>
            <div className={`back ${displayFront ? "hidden" : ""}`}>
                <form onSubmit={submitCard}>
                <label htmlFor="definition" className="screen-reader-text">Enter term definition</label>
                <input type="text" ref={definitionInput} name="definition" placeholder="Definition" value={definition} onChange={(e) => setDefinition(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}
