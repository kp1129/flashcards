import "./Notepad.css"

function Notepad({ setText }) {
    const handleInput = (e) => {
        setText(e.target.innerText)
    }
    return (
        <div className="notepad" 
        contentEditable="true"
        onInput={handleInput} />
    )
}

export default Notepad
