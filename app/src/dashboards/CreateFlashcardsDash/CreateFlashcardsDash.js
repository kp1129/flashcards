import { useState } from 'react'
import "./CreateFlashcardsDash.css"
import Controls from '../../components/Controls/Controls';
import Notepad from '../../components/Notepad/Notepad';


function CreateFlashcardsDash() {
    const [text, setText] = useState("")
    const [flashcardsCreated, setFlashcardsCreated] = useState([])

    const splitTextOnNewLine = (text) => text.trim().split("\n").filter(elem => elem)

    const generateFlashcards = (text) => {
        let newText = splitTextOnNewLine(text)
        let newFlashcards = newText.map(pair => {
            const [term, definition] = pair.split(":");
            return { term, definition }
        })
        setFlashcardsCreated(newFlashcards)
    }
    // helper function
    const readyToGenerateFlashcards = () => generateFlashcards(text)

    return (
        <div className="create-flashcards-dash">
            <Notepad setText={setText} />
            <Controls readyToGenerateFlashcards={readyToGenerateFlashcards} flashcardsCreated={flashcardsCreated}/>
        </div>
    )
}

export default CreateFlashcardsDash
