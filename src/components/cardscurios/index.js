import React from "react";
import './styles.css'

function CardsCurios(props){
    return (
        <div className="cardc">
            <img className="imagec" src={props.image} alt=''/>
            <p className="descriptionc">
                {props.text}
            </p>
        </div>
    )
}

export default CardsCurios