import React, { useContext } from 'react';
import './home_contact.scss';
import SeemoreBtn from '../seemoreBtn/seemoreBtn';
import { LangContext } from '../__Context/langContext'
const HomeContact = () => {
    const [fa] = useContext(LangContext);
    let conditionalLang =[];

    if(fa)
    {
        conditionalLang=['پروژه ای مد نظر دارید؟ همین حالا تماس بگیرید.','تماس با ما']
    }
    else
    {
        conditionalLang=['Do you need a project? Contact us now','Contact Us']
    }
    return (
        <section className='homeContact'>
            <h4>{conditionalLang[0]}</h4>
            <SeemoreBtn link='/contact' name={conditionalLang[1]} />
        </section>
    )
}

export default HomeContact;