import React, { useContext, useEffect, useState } from 'react'
import './home_blog.scss';
import TitleHead from '../titleHead/titleHead';
import HomeBlogCard from '../homeBlogCard/homeBlogCard';
import logo from '../../assest/images/Logo/Logo.png';
import { LangContext } from '../__Context/langContext';

const HomeBlog = () => {
    const [fa] = useContext(LangContext);
    let conditionallang;

    if (fa) {
        conditionallang = "جدیدترین مقاله ها"
    }
    else {
        conditionallang = "Lastest Article"
    }

    const [loading, setLoading] = useState(true);
    const [post,setPost] = useState([])

    useEffect(() => {
        fetch('../../assest/json/blog.json').then(res => res.json()).then(finalResult => setPost(finalResult));
        setLoading(false);
    }, []);

    if (loading) {
        return null
    }
    else {
        return (
            <section className='homeblog'>
                <TitleHead name={conditionallang} />
                <div>
                    {
                        post.slice(0, 3).map((rs, i) => {
                            return (
                                <HomeBlogCard name={rs.title}
                                    key={i}
                                    logo={logo}
                                    image={rs.image}
                                    link={`/blog/${rs.id}`}
                                    text={rs.excerpt} date={rs.date} />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default HomeBlog;
