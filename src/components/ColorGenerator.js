import React, {useState} from 'react'
import ColorHolder from './ColorHolder'
import ColorInput from './ColorInput'
import Values from "values.js"

const ColorGenerator = () => {
    const [input, setInput] = useState("#f12034");
    const [color, setColor] = useState([]);

    return (
        <div className="colorApp">
            <ColorInput input={input} setInput={setInput} setColor={setColor}/>
            <ColorHolder color={color}/>
        </div>
    )
}

export default ColorGenerator
