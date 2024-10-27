import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResults{
    toggleTheme: ()=>void;
    theme: Theme
}
export function useTheme():useThemeResults {
    const {theme , setTheme} = useContext(ThemeContext)

    const toggleTheme = ()=>{
        const newTheme = theme === Theme.DARK?Theme.LIGHT:Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
}