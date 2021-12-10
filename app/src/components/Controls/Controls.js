import "./Controls.css"

function Controls({ readyToGenerateFlashcards, flashcardsCreated }) {
    return (
        <div className="controls">
             <button type="text" className="btn next" onClick={readyToGenerateFlashcards}>Next</button>
            {/* TODO: loading OR counter and option to generate link */}
            {flashcardsCreated.length > 0 && (<div>
                <div className="counter">{flashcardsCreated.length}</div>
                <button type="text" className="btn submit">Everything is correct, generate link</button>
            </div>)}
        </div>
    )
}

export default Controls
