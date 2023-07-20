import './styles.css'

interface IProps {
    name: string,
    image: string
}

function Cards(props: IProps){
    return (
        <div className="card" style={{backgroundImage: `url(${props.image})`}}>
            <span>{props.name}</span>
        </div>
    )  
}

export default Cards