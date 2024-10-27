import React, { Suspense, useContext, useState } from 'react';
import Counter from './components/Counter';
import { Route, Routes, Link} from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss'
import { useTheme } from './theme/UseTheme';
import { classNames } from './helpers/classNames/classNames';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
const App = () => {

    const {theme, toggleTheme} = useTheme();
    return (

        <div className={classNames('app' , {hovered: true , selected: false}, [theme])}>
            <Link to={'/'} >Главная страница</Link>
            <Link to={'/about'}>о сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

            <Counter/>
            <button onClick={toggleTheme}>
                        TOGGLE
            </button>
        </div>
    );
};

export default App;