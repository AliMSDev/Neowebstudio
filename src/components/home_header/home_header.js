import React,{useContext} from 'react';
import './home_header.scss';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop';
import logo from '../../assest/images/Logo/Logo.png';
import radial from '../../assest/images/Radial.png';

import { LangContext } from '../__Context/langContext';

const HomeHeader = () => {

    const [fa] = useContext(LangContext);

    let conditionalTypingLang = [];
    let conditionalLang;

    if(fa)
    {
        conditionalTypingLang =['حرفه ای هستیم','خلاق هستیم','تیم خوبی هستیم'];
        conditionalLang = 'ما'
    }
    else 
    {
        conditionalTypingLang = ['Professional','Creative','a Good Team'];
        conditionalLang = 'We are'
    }
    
    return (
        <header className='home_header'>
            <figure>
                <img src={logo} alt='Logo' />
                <img src={radial} alt='radial hover'/>
            </figure>
            <h1>
                {conditionalLang}
                <TypistLoop interval={3000}>
                    {conditionalTypingLang.map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
                </TypistLoop>
            </h1>
        </header>
    )
}

export default HomeHeader;
