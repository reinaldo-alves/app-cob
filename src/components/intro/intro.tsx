import './styles.css'

interface IProps {
    title: string,
    text: string
}

function Intro(props: IProps) {
    return (
        <div className="intro-container">
            <h1 className="intro-title">{props.title}</h1>
            <p className="intro-description">{props.text}</p>            
        </div>
    )
}

export default Intro