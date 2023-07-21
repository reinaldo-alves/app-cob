import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import CardsState from "../../components/cardsstate";
import './styles.css'
import { useContext } from 'react';
import { StateContext } from '../../contexts/stateContext';
import { IEstados } from '../../types/types';

function MunicipiosHome(){
    const title = 'Guia de Municípios Conhecendo o Brasil'
    const text = 'Consulte aqui diversas informações sobre todos os municípios do Brasil. Para começar, escolha um estado.'

    const { estados } = useContext(StateContext);

    return (
        <>
            <Header />
            <Intro title={title} text={text}/>
            <div className="cards-state-container">
                {estados.map((item: IEstados, index: number) => (
                    <CardsState key={index} name={item.name} image={item.image} abrev={item.abrev} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default MunicipiosHome;