import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Intro from "../../components/intro/intro";
import './styles.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IDistrito, IMeta, IMunicipios, ISubdistrito } from '../../types/types';
import axios from 'axios';
import MapSVG from '../../components/mapSVG/mapSVG';

function Municipios(){
    const [munData, setMunData] = useState({} as IMunicipios);
    const [munMeta, setMunMeta] = useState({} as IMeta);
    const [munDist, setMunDist] = useState({} as Array<IDistrito>);
    const [munSubd, setMunSubd] = useState({} as Array<ISubdistrito>);
    const params = useParams();

    const urlMun = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${params.idmun}`
    const urlMeta = `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${params.idmun}/metadados`
    const urlDist = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${params.idmun}/distritos`
    const urlSubd = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${params.idmun}/subdistritos`

    async function loadMun(url: string) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar dados do município');
            return {} as IMunicipios;
        }
    }

    async function loadDist(url: string) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar distritos');
            return [] as Array<IDistrito>;
        }
    }

    async function loadSubd(url: string) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar subdistritos');
            return [] as Array<ISubdistrito>;
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
        const dist = await loadDist(urlDist);
        const subd = await loadSubd(urlSubd);
        setMunData(data);
        setMunMeta(meta);
        setMunDist(dist);
        setMunSubd(subd);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    function ListDistrito(array: Array<IDistrito>) {
        let newArray = [] as Array<string>
        if(array.length > 0) {
            array.forEach((item: IDistrito) => {
                newArray = [...newArray, item.nome]
            })
            return newArray.join(", ")
        } else {
            return 'Sem distritos'
        }
    }

    function ListSubdistrito(array: Array<ISubdistrito>) {
        let newArray = [] as Array<string>
        if(array.length > 0) {
            array.forEach((item: ISubdistrito) => {
                newArray = [...newArray, item.nome]
            })
            return newArray.join(", ")
        } else {
            return 'Sem subdistritos'
        }
    }

    console.log(munDist)

    return (
        <>
            <Header />
            <Intro title={`${munData.nome} - ${munData.microrregiao? munData.microrregiao.mesorregiao.UF.sigla : ''}`} text={''}/>
            <div className="info-state-container">
                <div className="flag-map-mun">
                    <MapSVG width='100%' name={munData.nome} link={`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${params.idmun}`} />
                    <div className="info-mun">
                        <span>{`Área: ${munMeta.area? munMeta.area.dimensao.toString().replace(/\./g, ',') : ''} ${munMeta.area? munMeta.area.unidade.id : ''}`}</span>
                        <span>{`Latitude média: ${munMeta.centroide? munMeta.centroide.latitude.toString().replace(/\./g, ',') : ''}`}</span>
                        <span>{`Longitude média: ${munMeta.centroide? munMeta.centroide.longitude.toString().replace(/\./g, ',') : ''}`}</span>
                    </div>
                </div>
                <div className="region-container">
                    <div className="region-list">
                        <h3>Regionalização anterior</h3>
                        <span>{`Mesorregião: ${munData.microrregiao? munData.microrregiao.mesorregiao.nome : ''}`}</span>
                        <span>{`Microrregião: ${munData.microrregiao? munData.microrregiao.nome : ''}`}</span>
                    </div>
                    <div className="region-list">
                        <h3>Nova Regionalização</h3>
                        <span>{`Região intermediária: ${munData['regiao-imediata']? munData['regiao-imediata']['regiao-intermediaria'].nome : ''}`}</span>
                        <span>{`Região imediata: ${munData['regiao-imediata']? munData['regiao-imediata'].nome : ''}`}</span>
                    </div>
                    <div className="region-list">
                        <h3>Distritos</h3>
                        <span>{ListDistrito(munDist)}</span>
                    </div>
                    <div className="region-list">
                        <h3>Subdistritos</h3>
                        <span>{ListSubdistrito(munSubd)}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Municipios;