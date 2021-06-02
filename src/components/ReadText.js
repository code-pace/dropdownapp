import React from 'react'
import ListText from "./ListText.js"

const ReadText = ({datas}) => {
    return (
        <section className="hero">
            {datas.map((data, index)=>{
                const {title, text, id, date} = data;
                return (
                <ListText key={id} title={title} text={text} date={date} />
                )
            })}
        </section>
    )
}

export default ReadText
