import { createContext, useState } from "react";

export const MoodContext = createContext();

export const MoodStore = ({ children }) => {
    const moodArray = ['p... da vida', 'irritado', 'de boa', 'felizão','nas nuvens']
    const [mood, setMood] = useState(2)

    return (
        <MoodContext.Provider value={{moodArray, mood, setMood}}>
            {children}
        </MoodContext.Provider>
    )
}