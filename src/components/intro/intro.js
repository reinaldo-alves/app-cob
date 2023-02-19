import React from "react";
import './styles.css'

function Intro(props) {
    return (
        <>
            <div id="title-containera" >
                <h1 id="titlea">
                    {props.title}
                </h1>
            </div>
            <div id="sobrea">
                <div className="contenta" >
                    <p className="descriptiona" >
                        {props.text}
                    </p>            
                </div>
            </div>
        </>
    )
}

export default Intro