import React, { useContext } from 'react';
import './home_whatDo.scss';
import TitleHead from '../titleHead/titleHead'
import WhatDoItems from '../whatdoItems/whatdoItems';

import seo from '../../assest/images/seo.svg'
import webcode from '../../assest/images/webcode.svg'
import webdesign from '../../assest/images/webdesign.svg'
import { LangContext } from '../__Context/langContext';

const HomeWhatDo = () => {

    const [fa] = useContext(LangContext)
    let conditionallang = [];
    if (fa) {
        conditionallang =
            [
                {
                    title: 'ما چه کاری انجام می دهیم'
                },
                {
                    title: 'سئو وب سایت',
                    text: 'بهینه سازی موتور جستجو یا SEO فرایندی است برای افزایش دید و احتمال وب سایت شما در موتورهای جستجو. این مهم است زیرا به موتورهای جستجوگر مانند Google کمک می کند تا وب سایت شما را بهتر تشخیص دهند و به آن اجازه می دهد محتوای شما را به افراد مناسب نشان دهد.'
                },
                {
                    title: 'طراحی وب سایت',
                    text: "طراحی وب از این جهت اهمیت دارد که بر نحوه درک مخاطبان از نام تجاری شما تأثیر می گذارد. تصور شما بر روی آنها باعث می شود كه آنها در صفحه خود باقی بمانند و در مورد شغل خود بیاموزند یا صفحه خود را ترك كنند و به رقیبی روی آورند. یک طراحی وب خوب به شما کمک می کند تا پیگیری های خود را در صفحه خود نگه دارید."
                },
                {
                    title: 'طراحی هویت بصری',
                    text: "در رابطه با وب سایت ها و برنامه ها ، طراحی UI ظاهر ، احساس و تعامل محصول را در نظر می گیرد. همه چیز در مورد اطمینان از این موضوع است که رابط کاربری یک محصول تا حد امکان بصری است و این بدان معناست که هر عنصر تعاملی و تصویری و تعاملی را که ممکن است کاربر با آن روبرو شود ، با دقت در نظر بگیرید."
                }
            ]
    }
    else {
        conditionallang =
            [
                {
                    title: 'What Do We Do'
                },
                {
                    title: 'SEO',
                    text: "Search Engine Optimization - or SEO - is the process of increasing your website's visibility and likeliness to be found in search engines. This is important because it helps search engines like Google better identify what your website is about and allows it to show your content to the right people."
                },
                {
                    title: 'Web Design',
                    text: "Web design is important because it impacts how your audience perceives your brand. The impression you make on them can either get them to remain on your page and learn about your business or leave your page and turn to a competitor. A good web design helps you keep your leads on your page."
                },
                {
                    title: 'UI/UX Design',
                    text: "Featured snippet from the web in relation to websites and apps, UI design considers the look, feel, and interactivity of the product. It's all about making sure that the user interface of a product is as intuitive as possible, and that means carefully considering each and every visual, interactive element the user might encounter."
                }
            ]
    }

    return (
        <section className='whatDo'>
            <TitleHead name={conditionallang[0].title} />
            <div>
                <WhatDoItems image={webdesign} title={conditionallang[3].title} text={conditionallang[3].text} />
                <WhatDoItems image={webcode} title={conditionallang[2].title} text={conditionallang[2].text} />
                <WhatDoItems image={seo} title={conditionallang[1].title} text={conditionallang[1].text} />
            </div>
        </section>
    )
}

export default HomeWhatDo;
