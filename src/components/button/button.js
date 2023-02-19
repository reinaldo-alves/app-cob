import React from 'react'
import './styles.css'

function Button({ name, active, text, onClick}){
    return (
        <div className="containerButton">
            <button onClick={onClick} className={active ? 'enabledButton' : 'disabledButton'}>{name}</button>
            <span>{text}</span>
        </div>
    )
}

export default Button