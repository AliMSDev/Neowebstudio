import React, { useState, useEffect, useContext } from 'react'
import './about.scss';

import PageHeader from '../pageHeader/pageHeader';
import Loading from '../loading/loading';

import { LangContext } from '../__Context/langContext';
import HomeAbout from '../home_about/home_about';
import HomeWhatDo from '../home_whatDo/home_whatDo';
import AboutGoal from '../about_goal/aboutGoal';

const About = () => {
    const [fa] = useContext(LangContext);
    const [loading, setLoading] = useState(true);

    let conditionalTitle;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.title = 'Neoweb Studio | About';
    }, []);

    if (fa) {
        conditionalTitle = 'درباره ما';
    }
    else {
        conditionalTitle = 'About';
    }

    if (loading) {
        return <Loading LoadingClass='Loading' />
    }

    else {
        return (
            <>
                <PageHeader title={conditionalTitle} />
                <main className='about-main'>
                    <HomeAbout />
                    <HomeWhatDo />
                    <AboutGoal/>
                </main>
            </>
        )
    }
}

export default About;
