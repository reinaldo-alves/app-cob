import './styles.css'

interface IProps {
    name: string,
    image: string
}

function CardsState(props: IProps){
    return (
        <div className="cardstate">
            <img src={props.image} alt={props.name} />
            <span>{props.name}</span>
        </div>
    )
}

export default CardsState