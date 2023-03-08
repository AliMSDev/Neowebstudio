import React, { useContext } from 'react'
import Describecard from '../describeCard/describecard'
import './home_about.scss';
import TitleHead from '../titleHead/titleHead';
import { LangContext } from '../__Context/langContext';

const HomeAbout = () => {
    const [fa] = useContext(LangContext);
    let conditionalLang = {};

    if (fa) {
        conditionalLang = {
            name: 'درباره ما',
            text: 'ما فعالیت رسمی خود را از اردیبهشت ماه سال 1398 شروع کردیم. تیم ما تشکیل شده از افراد حرفه ای و با تجربه می باشد. سعی و تلاش و هدف اصلی تیم مجرب استدیو نئو وب ، تولید محصولات با حداکثر کیفیت ممکن می باشد که با نگاه بلند مدت به آینده مشتریان به عنوان سرمایه های اصلی شرکت به حساب می آیند. یکی از ویژگی های استدیو نئو وب ارائه خدمات به همراه پشتیبانی با کیفیت می باشد.',
            btnname: 'بیشتر خوانید',
        }
    }
    else {
        conditionalLang = {
            name: 'About Us',
            text: `
            We started our official activity in May 2019. Our team consists of professional and experienced people. The main goal of the experienced team of NeoWeb Studio is to produce products with maximum quality, which are considered as the main assets of the company with a long-term view of the future of customers. One of the feature of NeoWeb Studio is providing services along with quality support.`,
            btnname: 'See more'
        }
    }

    return (
        <section className='home_about'>
            <TitleHead name={conditionalLang.name} />
            <div>
                <Describecard
                    name={conditionalLang.name}
                    text={conditionalLang.text}
                    namebtn={conditionalLang.btnname}
                    linkbtn='/about' />
            </div>
            <div>

            </div>
        </section>
    )
}

export default HomeAbout;
