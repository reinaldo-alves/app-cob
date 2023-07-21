import { useNavigate } from 'react-router-dom'
import './styles.css'

interface IProps {
    name: string,
    abrev: string,
    image: string
}

function CardsState(props: IProps){
    const navigate = useNavigate()
    
    return (
        <div className="cardstate" onClick={() => navigate(`/municipios/${props.abrev}`)}>
            <img src={props.image} alt={props.name} />
            <span>{props.name}</span>
        </div>
    )
}

export default CardsState