import React from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './styles.css'
import Info from '../../assets/info.jpg'
import Video from '../../assets/Conheça-todas-as-línguas-do-Brasil-que-se-tornaram-oficiais.mp4'
import Cards from '../../components/cards'

function Home(){
    
    return (
        <>
            <Header />
            <div id='banner'>
                <img id='info' src={Info} alt="info"/>
            </div>
            <div className="title-container" >
                <h2>
                    Sejam bem vindos ao Conhecendo o Brasil
                </h2>
            </div>
            <div className="trailer-container" id="sobre">
                <div className="content" >
                    <p className="description" >
                        Sabemos que o Brasil é um país enorme, carregado de histórias, com diferentes paisagens, culturas e estilos de vida, muitas vezes desconhecido pela maior parte dos brasileiros. Para trazer para vocês um pouco dessa variedade, mostramos neste canal algumas histórias, informações, curiosidades e lugares incríveis do nosso país, ajudando a difundir cada vez mais esse conhecimento. Nas nossas redes sociais também trazemos informações sobre os municípios brasileiros, sua história, sua data de emancipação e algumas curiosidades.
                        <br /><br />
                        Se você curte este conteúdo, inscreva-se no nosso canal, siga a gente nas redes sociais e compartilhe os vídeos com os seus amigos, para que cada vez mais gente possa conhecer o que o nosso país tem a nos oferecer.
                    </p>            
                </div>
            </div>
            <div className="title-container" >
                <h2>
                    Vídeo mais recente
                </h2>
            </div>
            <div className="trailer-container" >
                <div className="content" >
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse" >
                        <p className="description" >
                            Vamos conhecer as regiões do Brasil onde existem outros idiomas oficiais além do português. Neste vídeo vamos mostrar para você cada uma dos idiomas falados no Brasil que se tornaram oficiais, para que você entenda de uma vez por todas a diversidade cultural e linguística que existe no nosso país.
                        </p>
                        <a href="https://youtu.be/Ch9N7LmRsFE" target="_blank" rel="noreferrer">
                            <button className="button">Assista no Youtube</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="title-container" id="title-card">
                <h2>
                    No nosso canal você encontra...
                </h2>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home