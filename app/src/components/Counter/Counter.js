import React from 'react'

function Counter({ flashcards }) {
    return (
        <div className="counter">
            {flashcards.length}
        </div>
    )
}

export default Counter
