import './styles.css'

interface IProps {
    title: string,
    text: string
}

function Intro(props: IProps) {
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