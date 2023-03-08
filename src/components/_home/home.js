import React, { useEffect, useState } from 'react'
import './home.scss';
import HomeHeader from '../home_header/home_header';
import Loading from '../loading/loading';
import HomeMain from '../home_main/home_main';

const Home = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        document.title = "Neoweb Studio | Home";
    }, []);
    if (loading) {
        return <Loading LoadingClass='Loading' />
    }
    else {
        return (
            <>
                <HomeHeader />
                <HomeMain />
            </>
        )
    }
}

export default Home;
