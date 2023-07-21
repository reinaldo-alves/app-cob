export interface IEstados {
    name: string,
    abrev: string,
    gent: string,
    image: string
}

export interface IMunicipios {
    id: number,
    nome: string,
    microrregiao: {
        id: number,
        nome: string,
        mesorregiao: {
            id: number,
            nome: string,
            UF: {
                id: number,
                nome: string,
                sigla: string,
            }
        }
    },
    "regiao-imediata": {
        id: number,
        nome: string,
        "regiao-intermediaria": {
            id: number,
            nome: string,
            UF: {
                id: number,
                nome: string,
                sigla: string,
            }
        }
    }
}

export interface IDistrito {
    id: string,
    nome: string
}

export interface ISubdistrito {
    id: string,
    nome: string,
    distrito: IDistrito
}

export interface IMeta {
    id: string,
    centroide: {
        longitude: number,
        latitude: number
    },
    area: {
        dimensao: string,
        unidade: {
            id: string,
            nome: string
        }
    }
}