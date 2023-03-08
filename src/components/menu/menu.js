import React, { useContext } from 'react'
import './menu.scss';

import MenuItems from '../menuItems/menuItems';
import MenuButton from '../menuButton/menuButton';

import { MenuContext } from '../__Context/menuContext';
import { LangContext } from '../__Context/langContext';


import logo from '../../assest/images/Logo/Logo.png';

import p1_mp3 from '../../assest/audio/p1.mp3';
import p2_mp3 from '../../assest/audio/p2.mp3';
import p3_mp3 from '../../assest/audio/p3.mp3';
import p4_mp3 from '../../assest/audio/p4.mp3';
import p5_mp3 from '../../assest/audio/p5.mp3';

import p1_ogg from '../../assest/audio/p1.ogg';
import p2_ogg from '../../assest/audio/p2.ogg';
import p3_ogg from '../../assest/audio/p3.ogg';
import p4_ogg from '../../assest/audio/p4.ogg';
import p5_ogg from '../../assest/audio/p5.ogg';

const Menu = () => {
    const [menu] = useContext(MenuContext);
    const [fa, setFa] = useContext(LangContext);

    const handlelang = (e) => {
        e.preventDefault();
        setFa(!fa);
    }

    let coditionalMenuName = [];
    let coditionalMenuClassName ='';

    if (fa) {
        coditionalMenuName = ['خانه','درباره ما','نمونه کار','بلاگ','تماس با ما'];
        coditionalMenuClassName = `${menu ? 'menu trueMenuFa' : 'menu menuFa'}`;
    }
    else{
        coditionalMenuName = ['Home','About','Work','Blog','Contact'];
        coditionalMenuClassName = `${menu ? 'menu trueMenuEn' : 'menu menuEn'}`;
    }
    return (
        <>
            <ul className={coditionalMenuClassName}>
                <MenuButton />

                <figure className='menuLogo'>
                    <img src={logo} alt='Logo' />
                </figure>

                <MenuItems link='/' name={coditionalMenuName[0]} mp3={p1_mp3} ogg={p1_ogg} idnum='menu_audio1' />
                <MenuItems link='/about' name={coditionalMenuName[1]} mp3={p2_mp3} ogg={p2_ogg} idnum='menu_audio2' />
                <MenuItems link='/work' name={coditionalMenuName[2]} mp3={p3_mp3} ogg={p3_ogg} idnum='menu_audio3' />
                <MenuItems link='/blog' name={coditionalMenuName[3]} mp3={p4_mp3} ogg={p4_ogg} idnum='menu_audio4' />
                <MenuItems link='/contact' name={coditionalMenuName[4]} mp3={p5_mp3} ogg={p5_ogg} idnum='menu_audio5' />

                <div className='langdiv'>
                    <a href="#changeLang" className={fa ? 'langBtn langBtnTrue' : 'langBtn langBtnFalse'} onClick={handlelang}>
                        {fa ? 'En' : 'فا'}
                    </a>
                </div>
            </ul>
        </>
    )
}

export default Menu;
