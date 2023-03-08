import React,{useContext} from 'react';
import {MenuContext} from '../__Context/menuContext';
import './menuButton.scss';
import { LangContext } from '../__Context/langContext';

const MenuButton = () => {
    const [menu,setMenu] = useContext(MenuContext)
    const handleclick =()=>{
        setMenu(!menu);
    }

    const [fa] = useContext(LangContext);

    let conditionalBtnClassName = '';

    if(fa)
    {
        conditionalBtnClassName = `${menu?'menuBtn menuBtnFa true':'menuBtn menuBtnFa'}`
    }
    else{
        conditionalBtnClassName = `${menu?'menuBtn menuBtnEn true':'menuBtn menuBtnEn'}`
    }
    return (
        <button className={conditionalBtnClassName} onClick={handleclick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default MenuButton;
