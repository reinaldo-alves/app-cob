import './styles.css'

interface IProps {
    image: string,
    text: string
}

function CardsCurios(props: IProps){
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