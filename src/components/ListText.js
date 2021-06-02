import React, {useState} from 'react'

const ListText = ({title, text, date}) => {
    const [status, setStatus] = useState(false)
    const changeStatus = () => {
        setStatus(!status);
    }
    return (
        <div className="text-content">
            <div className="contents">
                <h1>{title}</h1>
                <button onClick={changeStatus}>{status?<i className="fas fa-minus"></i>:<i className="fas fa-plus"></i>}</button>
            </div>
            <p className="date">{date}</p>
            {status && <p>{text}</p> }
        </div>
    )
}

export default ListText
