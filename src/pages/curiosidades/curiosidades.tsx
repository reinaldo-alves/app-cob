import CardsCurios from "../../components/cardscurios";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Intro from "../../components/intro/intro";
import "./styles.css"

function Curiosidades(){
    const title = 'Curiosidades'
    const text = 'Esta é a nossa seção de curiosidades! Aqui você encontra pequenos artigos que mostram locais e fatos curiosos sobre o nosso país, para que você possa ficar bem informado e conheça cada vez melhor o Brasil.'
    
    const curiosContent = [
        {image: 'https://yt3.ggpht.com/qRM8F8hD9pG_Rk_zAPlqWl780G5_2gCc4Pm2iWrDla85T3gMBHAo-yK5L54xEO2tmAnw_tS6dVEos90=s640-c-fcrop64=1,2a990000d566ffff-nd-v1-rwa',
        text: 'A Praça XV de Novembro é um dos endereços mais importantes da cidade de Florianópolis. Foi lá que a cidade foi fundada, e além disso, vários prédios importantes estão ao seu redor, como o Palácio Cruz e Souza e a Catedral Metropolitana. Só que esta praça também é conhecida por alguns eventos históricos, entre eles uma das maiores manifestações contrárias ao regime militar, que reuniu milhares de pessoas.'},
    
        {image: 'https://yt3.ggpht.com/ni6e7Lwtdi8EsorxbnnMZJnQqliXDo3gQN9oXOw0GmxQj0Abiu9biIErt7nVYEIYgdCBd8jOL_ZliuQ=s640-c-fcrop64=1,152a0000c8b8ffff-nd-v1',
        text: 'A Romaria do Bom Jesus é considerada como a terceira maior romaria do Brasil, atrás apenas da romaria de Aparecida e da Romaria do Padre Cícero. Porém, o santuário que recebe a romaria do Bom Jesus é completamente diferente dos outros, já que foi esculpido pela própria natureza.'},
    
        {image: 'https://yt3.ggpht.com/w-A_xq4Jq9Ep1fmoZZFfXDWffvOBch4DrK_jHbqyQiQV1Dfj9FGhSGaP_1m2I7INMpUAqgZfwY_ZvjI=s640-c-fcrop64=1,31230000cedcffff-nd-v1',
        text: 'Hoje, dia 15 de novembro de 2022, é comemorado o dia da Proclamação da República. Sempre que falamos em Proclamação da República, logo lembramos do Marechal Deodoro da Fonseca e desta imagem abaixo, uma pintura que representa o momento da proclamação. Mas onde fica esse lugar que é retratado nesta pintura? Ele realmente existe ou foi uma criação do artista?'},
    
        {image: 'https://yt3.ggpht.com/c7El_kKTYvYkHte66dbtGvK9RxQkutTWuIR_A4UbQ-MCz-gqfxEpgx8HiKcuXclfLvqTktwpOTC_e5o=s640-c-fcrop64=1,2aa60000d559ffff-nd-v1',
        text: 'A Usina Hidrelétrica de Belo Monte, no Pará, é uma das construções mais contestada dos últimos anos, devido ao grande impacto ambiental e social que ela gerou. Por outro lado, a usina é capaz de gerar quase 20% de toda a energia elétrica consumida no país, mas, efetivamente, apenas 40% de sua capacidade total é utilizada, já que ela opera com reservatório reduzido. De qualquer forma, a Usina Hidrelétrica de Belo Monte está entre as maiores do mundo em potência total instalada.'},
    
        {image: 'https://yt3.ggpht.com/yGF1RA6aUck24IgrIdUjfIDYdr0CM19ji5mdm6hI2feFnixxKa1Vv1T7QVj_iVmfj01WoHmdw_43=s640-c-fcrop64=1,2d6b0000d294ffff-nd-v1-rwa',
        text: 'Esta é a belíssima Catedral Angelopolitana, que fica na cidade de Santo Ângelo, no Rio Grande do Sul. Ela começou a ser construída em 1929 e é fortemente inspirada em outra igreja erguida quase 200 anos antes, mas que hoje não recebe mais celebrações religiosas.'},
    
        {image: 'https://yt3.ggpht.com/we8ye6w7nlt1uu-ou406-nny8a3ZzxYAUwfvh0UqlkG4esU2Mv0zhQ3M-7r2iq8jro4kZ4kmsVK0KXQ=s415-c-fcrop64=1,73130000fb1bffff-nd-v1',
        text: 'No dia 6 de março de 1982 aconteceu o maior avistamento coletivo de ovnis da história. Neste dia, milhares de pessoas presenciaram a chegada de um objeto voador não identificado durante uma partida de futebol em Campo Grande, no Mato Grosso do Sul, e até hoje não existe uma explicação para este fenômeno.'},
    
        {image: 'https://yt3.ggpht.com/LJUZvZ0jQUocMx4uyY0hDIDoGc63bH_u3CG0F29QTefvQwnrPiRDQELqiq51RFpxSpATbLuYrQgdkw=s554-c-fcrop64=1,37ef0000c810ffff-nd-v1-rwa',
        text: 'Na divisa entre Roraima e Amazonas existe um trecho de 120 quilômetros da BR-174 que é fechado durante a noite. Isso ocorre porque este trecho fica dentro da Terra Indígena Waimiri Atroari, onde vivem muito animais de hábito noturno que ocupar a pista neste horário. Esta terra indígena é uma das maiores do país, e isso justifica o tamanho do trecho interditado da rodovia, que também é uma das maiores do Brasil.'},
    
        {image: 'https://yt3.ggpht.com/Lh_nARS_gbYEIWIpkgOB6yjhASr_XJi2dYwgotf7oAu34WVLW2orCl3GAAfVouKGeXeZzdCpUiroSQ=s640-c-fcrop64=1,20000000dfffffff-nd-v1-rwa',
        text: 'A localização precisa do centro geodésico de um território não é algo tão simples, tanto que sempre existem contestações ou conflitos, às vezes mais de um lugar reinvidicam essa posição. Por exemplo, existe um marco que sinaliza o Centro Geodésico do Brasil na Praça dos Girassois, em Palmas, mas alguns especialistas dizem que esse ponto fica a mais de 500 quilômetros da capital do Tocantins.'},
    
        {image: 'https://yt3.ggpht.com/TJRs8bPLgyV_YMWGzfIXN99s8XMS2Du_DHpCLDmRuO3DxZhSvzsjwyNielRKNNO32OAnqoH8XyTIWQ=s640-c-fcrop64=1,3dde0000ffffffff-nd-v1',
        text: 'Este é a imagem do famoso Rio Ipiranga no início do século XX. Naquela época, o local onde ocorreu o Grito da Independência era pouco habitado, mas ao longo do tempo, a cidade cresceu e envolveu toda essa área, mudando de vez o aspecto desse pequeno riacho.'},
    
        {image: 'https://yt3.ggpht.com/rCrSCUElfnYZANEnQ1PKMq2RY5e4htUDkitrkXxOEHaoe-iRvr0aIfGDaHbAy-9Nicp1mjH8mvSx5w=s640-c-fcrop64=1,08890000f777ffff-nd-v1',
        text: 'A BR-262 é uma das rodovias mais importantes do país. É a principal ligação entre Belo Horizonte e o litoral capixaba, tanto que é muito usada pelos turistas mineiros e para o escoamento da produção do interior do estado pelo Porto de Vitória. Só que esta rodovia é muito maior, ela chega até a fronteira com a Bolívia, passando pelo meio do Pantanal, um dos biomas mais ricos do mundo.'}
    ]


    return (
        <>
            <Header />
            <Intro title={title} text={text}/>
            <div className="curios-card-container">
                <div className="cards-contentc">
                    {curiosContent.map((item, index) => (
                        <CardsCurios key={index} image={item.image} text={item.text} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Curiosidades;