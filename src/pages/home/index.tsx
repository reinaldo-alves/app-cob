import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './styles.css'
import Info from '../../assets/info.jpg'
import Cards from '../../components/cards'
import Trailer from '../../components/trailer/trailer'

function Home(){
    const cardsData = [
        {name: 'Lugares curiosos', image: 'https://quantocustaviajar.com/blog/wp-content/uploads/2019/02/parque-estadual-vila-velha-4.jpg'},
        {name: 'Histórias interessantes', image: 'https://www.a12.com/source/files/originals/Victor_Meirelles_-_Primeira_Missa-931456.jpg'},
        {name: 'Listas - Top10', image: 'http://www.extingueincendio.com.br/wp-content/uploads/2015/09/os-10-maiores-fabricantes-de-extintores-650x427.jpg'}
    ]

    console.log(cardsData)

    return (
        <>
            <Header />
            <div id='banner'>
                <img id='info' src={Info} alt="info"/>
            </div>
            <div className="section-container" >
                <h2>Sejam bem vindos ao Conhecendo o Brasil</h2>
                <p className="about-description" >
                    Sabemos que o Brasil é um país enorme, carregado de histórias, com diferentes paisagens, culturas e estilos de vida, muitas vezes desconhecido pela maior parte dos brasileiros. Para trazer para vocês um pouco dessa variedade, mostramos neste canal algumas histórias, informações, curiosidades e lugares incríveis do nosso país, ajudando a difundir cada vez mais esse conhecimento. Nas nossas redes sociais também trazemos informações sobre os municípios brasileiros, sua história, sua data de emancipação e algumas curiosidades.
                    <br /><br />
                    Se você curte este conteúdo, inscreva-se no nosso canal, siga a gente nas redes sociais e compartilhe os vídeos com os seus amigos, para que cada vez mais gente possa conhecer o que o nosso país tem a nos oferecer.
                </p>            
            </div>
            <div className="section-container" >
                <h2 className="section-title">Vídeo em destaque</h2>
                <Trailer />
            </div>
            <div className="section-container">
                <h2 className="section-title">No nosso canal você encontra...</h2>
                <div className="cards-container">
                    {cardsData.map((item) => (
                        <Cards name={item.name} image={item.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home