import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const dados = {
        nome: 'Paulo',
        idade: 22,
        ativo: true
    }

    const [login, setLogin] = useState(false)

    return (
        <UserContext.Provider value={{dados, login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

