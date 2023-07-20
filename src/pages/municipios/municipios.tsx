import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import CardsState from "../../components/cardsstate";
import './styles.css'

function Municipios(){
    const title = 'Guia de Municípios Conhecendo o Brasil'
    const text = 'Consulte aqui diversas informações sobre todos os municípios do Brasil. Para começar, escolha um estado.'

    const bandeiras = [
        {name: 'São Paulo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/1280px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png'},
        {name: 'Minas Gerais', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/1280px-Bandeira_de_Minas_Gerais.svg.png'},
        {name: 'Rio de Janeiro', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1280px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png'},
        {name: 'Bahia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/1280px-Bandeira_da_Bahia.svg.png'},
        {name: 'Paraná', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/1280px-Bandeira_do_Paran%C3%A1.svg.png'},
        {name: 'Rio Grande do Sul', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/1280px-Bandeira_do_Rio_Grande_do_Sul.svg.png'},
        {name: 'Pernambuco', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/1280px-Bandeira_de_Pernambuco.svg.png'},
        {name: 'Ceará', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/1280px-Bandeira_do_Cear%C3%A1.svg.png'},
        {name: 'Pará', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/1280px-Bandeira_do_Par%C3%A1.svg.png'},
        {name: 'Santa Catarina', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/1280px-Bandeira_de_Santa_Catarina.svg.png'},
        {name: 'Goiás', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/1280px-Flag_of_Goi%C3%A1s.svg.png'},
        {name: 'Maranhão', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/1280px-Bandeira_do_Maranh%C3%A3o.svg.png'},
        {name: 'Amazonas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/1280px-Bandeira_do_Amazonas.svg.png'},
        {name: 'Espírito Santo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/1280px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png'},
        {name: 'Paraíba', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/1280px-Bandeira_da_Para%C3%ADba.svg.png'},
        {name: 'Mato Grosso', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/1280px-Bandeira_de_Mato_Grosso.svg.png'},
        {name: 'Rio Grande do Norte', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/1280px-Bandeira_do_Rio_Grande_do_Norte.svg.png'},
        {name: 'Alagoas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/1280px-Bandeira_de_Alagoas.svg.png'},
        {name: 'Piauí', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/1280px-Bandeira_do_Piau%C3%AD.svg.png'},
        {name: 'Distrito Federal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/1280px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png'},
        {name: 'Mato Grosso do Sul', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/1280px-Bandeira_de_Mato_Grosso_do_Sul.svg.png'},
        {name: 'Sergipe', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/1280px-Bandeira_de_Sergipe.svg.png'},
        {name: 'Rondônia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/1280px-Bandeira_de_Rond%C3%B4nia.svg.png'},
        {name: 'Tocantins', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/1280px-Bandeira_do_Tocantins.svg.png'},
        {name: 'Acre', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/1280px-Bandeira_do_Acre.svg.png'},
        {name: 'Amapá', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/1280px-Bandeira_do_Amap%C3%A1.svg.png'},
        {name: 'Roraima', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/1280px-Bandeira_de_Roraima.svg.png'}
    ]

    return (
        <>
            <Header />
            <Intro title={title} text={text}/>
            <div className="cards-state-container">
                {bandeiras.map((item) => (
                    <CardsState name={item.name} image={item.image} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Municipios;