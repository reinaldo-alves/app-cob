import { createContext } from "react";

export const StateContext = createContext();

export const StateStore = ({ children }) => {
    const estados = [
        {name: 'São Paulo', abrev: 'SP', gent: 'paulista',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/1280px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png'},
        {name: 'Minas Gerais', abrev: 'MG', gent: 'mineiro', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/1280px-Bandeira_de_Minas_Gerais.svg.png'},
        {name: 'Rio de Janeiro', abrev: 'RJ', gent: 'fluminense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1280px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png'},
        {name: 'Bahia', abrev: 'BA', gent: 'baiano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/1280px-Bandeira_da_Bahia.svg.png'},
        {name: 'Paraná', abrev: 'PR', gent: 'paranaense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/1280px-Bandeira_do_Paran%C3%A1.svg.png'},
        {name: 'Rio Grande do Sul', abrev: 'RS', gent: 'gaúcho', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/1280px-Bandeira_do_Rio_Grande_do_Sul.svg.png'},
        {name: 'Pernambuco', abrev: 'PE', gent: 'pernambucano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/1280px-Bandeira_de_Pernambuco.svg.png'},
        {name: 'Ceará', abrev: 'CE', gent: 'cearense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/1280px-Bandeira_do_Cear%C3%A1.svg.png'},
        {name: 'Pará', abrev: 'PA', gent: 'paraense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/1280px-Bandeira_do_Par%C3%A1.svg.png'},
        {name: 'Santa Catarina', abrev: 'SC', gent: 'catarinense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/1280px-Bandeira_de_Santa_Catarina.svg.png'},
        {name: 'Goiás', abrev: 'GO', gent: 'goiano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/1280px-Flag_of_Goi%C3%A1s.svg.png'},
        {name: 'Maranhão', abrev: 'MA', gent: 'maranhense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/1280px-Bandeira_do_Maranh%C3%A3o.svg.png'},
        {name: 'Amazonas', abrev: 'AM', gent: 'amazonense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/1280px-Bandeira_do_Amazonas.svg.png'},
        {name: 'Espírito Santo', abrev: 'ES', gent: 'capixaba', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/1280px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png'},
        {name: 'Paraíba', abrev: 'PB', gent: 'paraibano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/1280px-Bandeira_da_Para%C3%ADba.svg.png'},
        {name: 'Mato Grosso', abrev: 'MT', gent: 'mato-grossense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/1280px-Bandeira_de_Mato_Grosso.svg.png'},
        {name: 'Rio Grande do Norte', abrev: 'RN', gent: 'potiguar', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/1280px-Bandeira_do_Rio_Grande_do_Norte.svg.png'},
        {name: 'Alagoas', abrev: 'AL', gent: 'alagoano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/1280px-Bandeira_de_Alagoas.svg.png'},
        {name: 'Piauí', abrev: 'PI', gent: 'piauiense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/1280px-Bandeira_do_Piau%C3%AD.svg.png'},
        {name: 'Distrito Federal', abrev: 'DF', gent: 'brasiliense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/1280px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png'},
        {name: 'Mato Grosso do Sul', abrev: 'MS', gent: 'sul-mato-grossense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/1280px-Bandeira_de_Mato_Grosso_do_Sul.svg.png'},
        {name: 'Sergipe', abrev: 'SE', gent: 'sergipano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/1280px-Bandeira_de_Sergipe.svg.png'},
        {name: 'Rondônia', abrev: 'RO', gent: 'rondoniense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/1280px-Bandeira_de_Rond%C3%B4nia.svg.png'},
        {name: 'Tocantins', abrev: 'TO', gent: 'tocantinense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/1280px-Bandeira_do_Tocantins.svg.png'},
        {name: 'Acre', abrev: 'AC', gent: 'acreano', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/1280px-Bandeira_do_Acre.svg.png'},
        {name: 'Amapá', abrev: 'AP', gent: 'amapaense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/1280px-Bandeira_do_Amap%C3%A1.svg.png'},
        {name: 'Roraima', abrev: 'RR', gent: 'roraimense', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/1280px-Bandeira_de_Roraima.svg.png'}
    ]

    return (
        <StateContext.Provider value={{estados}}>
            {children}
        </StateContext.Provider>
    )
}