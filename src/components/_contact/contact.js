import React, { useState, useContext, useEffect } from 'react';
import './contact.scss';

import PageHeader from '../pageHeader/pageHeader';
import Loading from '../loading/loading';

import { LangContext } from '../__Context/langContext';

const Contact = () => {
    const [fa] = useContext(LangContext);
    const [loading, setLoading] = useState(true);

    let conditionalTitle;
    let conditionalClass;
    let conditionLang = [];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.title = 'Neoweb Studio | Contact';
    }, []);

    if (fa) {
        conditionalTitle = 'تماس با ما';
        conditionalClass = 'contact_form ContactFa';
        conditionLang =
            [
                {
                    name: 'نام',
                    tel: 'شماره تماس',
                    email: 'ایمیل',
                    message: 'پیام',
                    send: 'ارسال',
                    alert: 'پیام شما با موفقیت ارسال شد.'
                }
            ]
    }
    else {
        conditionalTitle = 'Contact';
        conditionalClass = 'contact_form ContactEn';
        conditionLang =
            [
                {
                    name: 'Name',
                    tel: 'Phone Number',
                    email: 'Email',
                    message: 'Message',
                    send: 'Send',
                    alert: 'Your message has been successfully sent.'
                }
            ]
    }

    if (loading) {
        return <Loading LoadingClass='Loading' />
    }
    else {
        return (
            <>
                <PageHeader title={conditionalTitle} />
                <section className={conditionalClass}>
                    <form action="https://submit-form.com/EzsVwhsVyhyO5NI3e-0uM" target="_self" className="colxs12 cols12 colm6">

                        <input type="hidden" name="_redirect" value="https://neowebstudio.ir/" />

                        <input type="text" name="name" placeholder={conditionLang[0].name} id="name" required />

                        <input type="number" name="tel" placeholder={conditionLang[0].tel} />

                        <input type="email" name="email" placeholder={conditionLang[0].email} id="email" required />

                        <textarea name="message" placeholder={conditionLang[0].message} required></textarea>

                        <button type='submit' id="submit">{conditionLang[0].send}</button>

                    </form>
                </section>
            </>
        )
    }
}

export default Contact;
