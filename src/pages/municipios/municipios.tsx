import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import CardsState from "../../components/cardsstate";

function Municipios(){
    const title = 'Guia de Municípios Conhecendo o Brasil'
    const text = 'Consulte aqui diversas informações sobre todos os municípios do Brasil. Para começar, escolha um estado.'
    return (
        <>
            <Header />
            <Intro title={title} text={text}/>
            <CardsState />
            <Footer />
        </>
    )
}

export default Municipios;