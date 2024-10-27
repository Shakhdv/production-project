import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY ,ThemeContext , Theme} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC = ({children}) => {
    const [theme ,setTheme] =useState<Theme>(defaultTheme)

    const toggleTheme = ()=>{
        setTheme(theme === Theme.DARK?Theme.LIGHT:Theme.DARK)
    }

    const defaultProps = useMemo(()=>(
        {
            theme: theme,
            setTheme: setTheme,
        }
    ), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>

        // <ThemeContent.Provider value={defaultProps}>
        //     {children}
        // </ThemeContent.Provider>
    );
};

export default ThemeProvider;