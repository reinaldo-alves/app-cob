import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import './styles.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../contexts/stateContext';
import { IEstados, IMeta, IMunicipios } from '../../types/types';
import axios from 'axios';
import MapSVG from '../../components/mapSVG/mapSVG';

function Estados(){
    const [stateData, setStateData] = useState({} as IEstados);
    const [stateMun, setStateMun] = useState([] as Array<IMunicipios>);
    const [stateMeta, setStateMeta] = useState({} as IMeta);
    const [search, setSearch] = useState('');
    const { estados } = useContext(StateContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        estados.forEach((item: IEstados) => {
            if(item.abrev === params.estado) {
                setStateData(item);
            }
        })
    }, [])

    const urlMun = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${params.estado}/municipios`
    const urlMeta = `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${params.estado}/metadados`

    async function loadMun(url: string) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar municípios');
            return [];
        }
    }

    async function loadMeta(url: string) {
        try {
            const response = await axios.get(url)
            return response.data[0]
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar metadados');
            return {} as IMeta;
        }
    }

    const fetchData = async () => {
        const data = await loadMun(urlMun);
        const meta = await loadMeta(urlMeta);
        setStateMun(data);
        setStateMeta(meta);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    console.log(stateMeta)

    return (
        <>
            <Header />
            <Intro title={stateData.name} text={`Escolha um município ${stateData.gent} para continuar. Se preferir, use o campo de pesquisa abaixo para encontrar um município`}/>
            <div className="info-state-container">
                <div className="flag-map">
                    <img className="state-flag" src={stateData.image} alt={`Bandeira ${stateData.name}`} />
                    <MapSVG width='100%' name={stateData.name} link={`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${stateData.abrev}`} />
                    <div className="info-state">
                        <span>{`Área: ${stateMeta.area? stateMeta.area.dimensao.toString().replace(/\./g, ',') : ''} ${stateMeta.area? stateMeta.area.unidade.id : ''}`}</span>
                        <span>{`Latitude média: ${stateMeta.centroide? stateMeta.centroide.latitude.toString().replace(/\./g, ',') : ''}`}</span>
                        <span>{`Longitude média: ${stateMeta.centroide? stateMeta.centroide.longitude.toString().replace(/\./g, ',') : ''}`}</span>
                    </div>
                </div>
                <div className="mun-container">
                    <input type='text' placeholder='Pesquise um município' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <div className="mun-list">
                        {stateMun
                            .filter((item: IMunicipios) => item.nome.toLowerCase().includes(search.trim().toLowerCase()))
                            .map((item: IMunicipios, index: number) => (
                                <span key={index} onClick={() => navigate(`/municipios/${params.estado}/${item.id}`)}>{item.nome}</span>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Estados;