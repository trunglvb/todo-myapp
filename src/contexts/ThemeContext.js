import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    //state
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black'
        },
        dark: {
            background:'rgb(39,39,39)',
            color: 'white'
        }
    });
    
    //toggle theme
    const toggleTheme = () => {
        setTheme({
            ...theme, 
            isLightTheme : !theme.isLightTheme
        })
    }
    const dataThemeContext = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value= {dataThemeContext}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;