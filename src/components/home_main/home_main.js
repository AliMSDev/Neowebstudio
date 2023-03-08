import React from 'react';
import './home_main.scss';
import HomeAbout from '../home_about/home_about';
import HomeWhatDo from '../home_whatDo/home_whatDo';
import HomeWork from '../home_work/home_work';
import HomeContact from '../home_contact/home_contact';
import HomeBlog from '../home_blog/home_blog';

const HomeMain = () => {
    return (
        <main>
            <HomeAbout/>
            <HomeWhatDo/>
            <HomeWork/>
            <HomeContact/>
            <HomeBlog/>
        </main>
    )
}

export default HomeMain;
