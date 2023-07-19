import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import CardsState from "../../components/cardsstate";

function Fotos(){
    const title = 'Conhecendo o Brasil através das fotos'
    const text = 'O Brasil é um país imenso, e consequentemente, as paisagens mudam muito de uma região para outra. Pensando nisto, trouxemos uma foto de cada estado brasileiro para que você perceba a dimensão desta diversidade.'
    return (
        <>
            <Header />
            <Intro title={title} text={text}/>
            <CardsState />
            <Footer />
        </>
    )
}

export default Fotos;