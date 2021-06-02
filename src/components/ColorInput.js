import React, {useState} from 'react'
import Values from "values.js"

const ColorInput = ({input, setInput, setColor}) => {
    const [valid, setValid] = useState(false);
    const onChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.className)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(input).all(10);
            console.log(colors);
            setColor(colors)
            setValid(false);
        } catch (error) {
            console.log(error)
            setValid(true)
        }
    }
    return (
        <section className="input-section">
            <h1>Color Generator</h1>
            <form onSubmit={onSubmit} className="inputHolder">
                <input className={`${valid?'colorInputBox':null}`} type="text" onChange={onChange} value={input} placeholder="#f12034"/>
                <button type="submit" className="btnColor">get colors</button>
            </form>
        </section>
    )
}

export default ColorInput
