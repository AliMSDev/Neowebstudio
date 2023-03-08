import React, { useContext } from 'react'
import './home_work.scss';

import TitleHead from '../titleHead/titleHead';
import HomeWorkCard from '../homeWorkCard/homeWorkCard';

import imgAli1 from '../../assest/images/porfolio//Ali/1.jpg';
import imgAli2 from '../../assest/images/porfolio/Ali/2.jpg';
import imgNaderian2 from '../../assest/images/porfolio/AmirHosseinNaderian/2.jpg';

import { LangContext } from '../__Context/langContext';

const HomeWork = () => {
    const [fa] = useContext(LangContext);
    let conditionalLang = []
    if (fa) {
        conditionalLang =
            [
                {
                    title: 'ali 1 fashe',
                    name: 'سایت فروشگاهی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.alims.ir/1'
                },
                {
                    title: 'ali 2 lend',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.alims.ir/2'
                },
                {
                    title: 'naderian 2 inchip',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.naderianm.ir/2'
                }
                ,
                {
                    title: 'جدیدترین نمونه کار ها'
                }
            ]
    }
    else {
        conditionalLang =
            [
                {
                    title: 'ali 1 fashe',
                    name: "Shopping Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.alims.ir/1'
                },
                {
                    title: 'ali 2 lend',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.alims.ir/2'
                },
                {
                    title: 'naderian 2 inchi',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.naderianm.ir/2'
                }
                ,
                {
                    title: 'Lastest Work'
                }
            ]
    }
    return (
        <section className="homework">
            <TitleHead name={conditionalLang[3].title} />
            <div>
                <HomeWorkCard image={imgAli1} link={conditionalLang[0].site} name={conditionalLang[0].name} text={conditionalLang[0].text} />
                <HomeWorkCard image={imgAli2} link={conditionalLang[1].site} name={conditionalLang[1].name} text={conditionalLang[1].text} />
                <HomeWorkCard image={imgNaderian2} link={conditionalLang[2].site} name={conditionalLang[2].name} text={conditionalLang[2].text} />
            </div>
        </section>
    )
}

export default HomeWork;
