import React from 'react'

const ColorHolder = ({color}) => {
    return (
        <section className="color-section">
            {color.map((colors, index) => {
                const {weight, hex} = colors;
                const hexValue = `#${hex}`;
                const onClicks =() => {
                    navigator.clipboard.writeText(hexValue);
                    alert("copied!!!");
                }
                return (
                    <div onClick={onClicks} key={index} style={{background:hexValue}} className={`colors ${index>9 && "whiteColor"}`}>
                        <i className="far fa-copy"></i>
                        <p>{`${weight}%`}</p>
                        <p>{hexValue}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ColorHolder
