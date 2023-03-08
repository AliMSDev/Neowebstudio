import React, { useState, useEffect, useContext } from 'react'
import './work.scss';

import PageHeader from '../pageHeader/pageHeader';
import Loading from '../loading/loading';

import imgAli1 from '../../assest/images/porfolio//Ali/1.jpg';
import imgAli2 from '../../assest/images/porfolio/Ali/2.jpg';
import imgAli3 from '../../assest/images/porfolio/Ali/3.jpg';
import imgAli4 from '../../assest/images/porfolio/Ali/4.jpg';

import imgNaderian1 from '../../assest/images/porfolio/AmirHosseinNaderian/1.jpg';
import imgNaderian2 from '../../assest/images/porfolio/AmirHosseinNaderian/2.jpg';
import imgNaderian3 from '../../assest/images/porfolio/AmirHosseinNaderian/3.jpg';
import imgNaderian4 from '../../assest/images/porfolio/AmirHosseinNaderian/4.jpg';
import imgNaderian5 from '../../assest/images/porfolio/AmirHosseinNaderian/5.jpg';
import imgNaderian6 from '../../assest/images/porfolio/AmirHosseinNaderian/6.jpg';
import imgNaderian7 from '../../assest/images/porfolio/AmirHosseinNaderian/7.jpg';
import imgNaderian8 from '../../assest/images/porfolio/AmirHosseinNaderian/8.jpg';
import imgNaderian9 from '../../assest/images/porfolio/AmirHosseinNaderian/9.jpg';
import imgNaderian10 from '../../assest/images/porfolio/AmirHosseinNaderian/10.jpg';

import imgMohammad1 from '../../assest/images/porfolio/Mohammad/1.jpg';
import imgMohammad2 from '../../assest/images/porfolio/Mohammad/2.jpg';

import { LangContext } from '../__Context/langContext';
import HomeWorkCard from '../homeWorkCard/homeWorkCard';

const Work = () => {

    const [loading, setLoading] = useState(true);
    const [fa] = useContext(LangContext);

    let conditionalLang = [];

    if (fa) {
        conditionalLang =
            [
                {
                    title: 'نمونه کار'
                },
                {
                    id: '1',
                    title: 'ali 1 fashe',
                    name: 'سایت فروشگاهی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.alims.ir/1'
                },
                {
                    id: '2',
                    title: 'ali 2 lend',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.alims.ir/2'
                },
                {
                    id: '3',
                    title: 'naderian 2 inchip',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.naderianm.ir/2'
                }
                ,
                {
                    id: '4',
                    title: 'ali 3 alims',
                    name: 'سایت شخصی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery",
                    site: 'https://portfolio.alims.ir/3'
                },
                {
                    id: '5',
                    title: 'naderian 1',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/1'
                },
                {
                    id: '6',
                    title: 'naderian 3',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/3'
                },
                {
                    id: '7',
                    title: 'naderian 4',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/4'
                },
                {
                    id: '8',
                    title: 'naderian 5',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/5'
                },
                {
                    id: '9',
                    title: 'ali v2 4',
                    name: "سایت شخصی",
                    text: 'طراحی سایت با فریم ورک React',
                    site: 'https://v2.alims.ir/'
                },
                {
                    id: '10',
                    title: 'naderian 6',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript - jQuery",
                    site: 'https://portfolio.naderianm.ir/7'
                },
                {
                    id: '11',
                    title: 'naderian 7',
                    name: 'سایت شخصی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/8'
                },
                {
                    id: '12',
                    title: 'naderian 8',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript",
                    site: 'https://portfolio.naderianm.ir/9'
                },
                {
                    id: '13',
                    title: 'naderian 9',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های React",
                    site: 'https://portfolio2.naderianm.ir/'
                },
                {
                    id: '14',
                    title: 'naderian 10',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های React",
                    site: 'https://portfolio3.naderianm.ir/'
                },
                {
                    id: '15',
                    title: 'mohammad 1',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript - jQuery",
                    site: 'https://sub.pcadmin.ir/'
                },
                {
                    id: '16',
                    title: 'mohammad 2',
                    name: 'سایت شرکتی',
                    text: "طراحی سایت با زبان های HTML5 - CSS3 - SASS - JavaScript - jQuery",
                    site: 'https://sub3.pcadmin.ir/'
                }
            ]
    }
    else {
        conditionalLang =
            [
                {
                    title: 'Work'
                },
                {
                    id: '1',
                    title: 'ali 1 fashe',
                    name: "Shopping Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.alims.ir/1'
                },
                {
                    id: '2',
                    title: 'ali 2 lend',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.alims.ir/2'
                },
                {
                    id:'3',
                    title: 'naderian 2 inchi',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.naderianm.ir/2'
                },
                {
                    id: '4',
                    title: 'ali 2 alims',
                    name: "Personal Website",
                    text: 'This website is created by HTML5 - CSS3 - SASS - Bootstrap 4 - JavaScript - jQuery',
                    site: 'https://portfolio.alims.ir/3'
                },
                {
                    id: '5',
                    title: 'naderian 1',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/1'
                },
                {
                    id:'6',
                    title: 'naderian 3',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/3'
                },
                {
                    id: '7',
                    title: 'naderian 4',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/4'
                },
                {
                    id: '8',
                    title: 'naderian 5',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/5'
                },
                {
                    id: '9',
                    title: 'ali v2 4',
                    name: "Personal Website",
                    text: 'This website is created by React',
                    site: 'https://v2.alims.ir/'
                },
                {
                    id: '10',
                    title: 'naderian 6',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript - jQuery',
                    site: 'https://portfolio.naderianm.ir/7'
                },
                {
                    id: '11',
                    title: 'naderian 7',
                    name: "Personal Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/8'
                },
                {
                    id: '12',
                    title: 'naderian 8',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript',
                    site: 'https://portfolio.naderianm.ir/9'
                },
                {
                    id: '13',
                    title: 'naderian 9',
                    name: "Company Website",
                    text: 'This website is created by React',
                    site: 'https://portfolio2.naderianm.ir/'
                }
                ,
                {
                    id: '14',
                    title: 'naderian 10',
                    name: "Company Website",
                    text: 'This website is created by React',
                    site: 'https://portfolio3.naderianm.ir/'
                },
                {
                    id: '15',
                    title: 'mohammad 1',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript - jQuery',
                    site: 'https://sub.pcadmin.ir/'
                },
                {
                    id: '16',
                    title: 'mohammad 2',
                    name: "Company Website",
                    text: 'This website is created by HTML5 - CSS3 - JavaScript - jQuery',
                    site: 'https://sub3.pcadmin.ir/'
                }
            ]
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.title = 'Neoweb Studio | Work';
    }, []);
    
    if (loading) {
        return <Loading LoadingClass='Loading' />
    }

    else {
        return (
            <>
                <PageHeader title={conditionalLang[0].title} />
                <main className='work-container'>
                    <div>
                        <HomeWorkCard image={imgAli1} link= {conditionalLang[1].site} name={conditionalLang[1].name} text={conditionalLang[1].text} />
                        <HomeWorkCard image={imgAli2} link= {conditionalLang[2].site} name={conditionalLang[2].name} text={conditionalLang[2].text} />
                        <HomeWorkCard image={imgNaderian2} link= {conditionalLang[3].site} name={conditionalLang[3].name} text={conditionalLang[3].text} />
                        <HomeWorkCard image={imgAli3} link= {conditionalLang[4].site} name={conditionalLang[4].name} text={conditionalLang[4].text} />
                        <HomeWorkCard image={imgNaderian1} link= {conditionalLang[5].site} name={conditionalLang[5].name} text={conditionalLang[5].text} />
                        <HomeWorkCard image={imgNaderian3} link= {conditionalLang[6].site} name={conditionalLang[6].name} text={conditionalLang[6].text} />
                        <HomeWorkCard image={imgNaderian4} link= {conditionalLang[7].site} name={conditionalLang[7].name} text={conditionalLang[7].text} />
                        <HomeWorkCard image={imgNaderian5} link= {conditionalLang[8].site} name={conditionalLang[8].name} text={conditionalLang[8].text} />
                        <HomeWorkCard image={imgAli4} link= {conditionalLang[9].site} name={conditionalLang[9].name} text={conditionalLang[9].text} />
                        <HomeWorkCard image={imgNaderian6} link= {conditionalLang[10].site} name={conditionalLang[10].name} text={conditionalLang[10].text} />
                        <HomeWorkCard image={imgNaderian7} link= {conditionalLang[11].site} name={conditionalLang[11].name} text={conditionalLang[11].text} />
                        <HomeWorkCard image={imgNaderian8} link= {conditionalLang[12].site} name={conditionalLang[12].name} text={conditionalLang[12].text} />
                        <HomeWorkCard image={imgNaderian9} link= {conditionalLang[13].site} name={conditionalLang[13].name} text={conditionalLang[13].text} />
                        <HomeWorkCard image={imgNaderian10} link= {conditionalLang[14].site} name={conditionalLang[14].name} text={conditionalLang[14].text} />
                        <HomeWorkCard image={imgMohammad1} link= {conditionalLang[15].site} name={conditionalLang[15].name} text={conditionalLang[15].text} />
                        <HomeWorkCard image={imgMohammad2} link= {conditionalLang[16].site} name={conditionalLang[16].name} text={conditionalLang[16].text} />
                    </div>
                </main>
            </>
        )
    }
}

export default Work;
