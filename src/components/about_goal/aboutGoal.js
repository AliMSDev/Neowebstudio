import React, { useContext } from 'react';
import './aboutGoal.scss';
import TitleHead from '../titleHead/titleHead';
import { LangContext } from '../__Context/langContext';
import WhatDoItems from '../whatdoItems/whatdoItems';

import code from '../../assest/images/code.png';
import product from '../../assest/images/product.png';
import support from '../../assest/images/support.png';

const AboutGoal = () => {
    const [fa] = useContext(LangContext);
    let conditionalLang = [];

    if (fa) {
        conditionalLang =
            [
                {
                    title : 'خدمات ما'
                },
                {
                    title: 'بروز بودن کد ها',
                    text: 'تیم ما تاکید بر استفاده از زبان ها و تکنولوژی های بروز دارد.'
                },
                {
                    title: 'محصول با کیفیت',
                    text: "محصولات با حداکثر کیفیت ممکن به کمک نیروهای متخصص تولید می شوند."
                },
                {
                    title: 'پشتیبانی مناسب',
                    text: "بعد از تولید محصولات نوبت به پشتیبانی محصول می رسد. تیم ما به کمک افراد متخصص با کیفیت ترین پشتیبانی را ارائه می دهد."
                }                
            ]
    }
    else {
        conditionalLang =
        [
            {
                title : 'Our Services'
            },
            {
                title: 'Code',
                text: "Our team emphasizes the use of updated languages ​​and technologies."
            },
            {
                title: 'Product',
                text: "Products with the highest possible quality are produced with the help of specialized personnel."
            },
            {
                title: 'Support',
                text: "After producing the products, it's time to support the product. With the help of experts, our team provides the highest quality support."
            }
        ]
    }
    return (
        <section className='whatDo aboutGoal'>
            <TitleHead name={conditionalLang[0].title} />
            <div>
                <WhatDoItems image={code} title={conditionalLang[1].title} text={conditionalLang[1].text} />
                <WhatDoItems image={product} title={conditionalLang[2].title} text={conditionalLang[2].text} />
                <WhatDoItems image={support} title={conditionalLang[3].title} text={conditionalLang[3].text} />
            </div>
        </section>
    )
}

export default AboutGoal;
