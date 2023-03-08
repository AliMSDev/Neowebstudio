import React, { useState, useEffect, useContext } from 'react';
import './blog.scss';
import Loading from '../loading/loading';
import logo from '../../assest/images/Logo/Logo.png';
import HomeBlogCard from '../homeBlogCard/homeBlogCard';
import PageHeader from '../pageHeader/pageHeader';
import { LangContext } from '../__Context/langContext';

function Blog() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch('../../assest/json/blog.json').then(res => res.json()).then(finalResult => setPost(finalResult));
            setLoading(false);
        }, 3000);
        document.title = 'Neoweb Studio | Blog';
    }, []);

    const [fa] = useContext(LangContext);

    let condition;

    if (fa) {
        condition = 'بلاگ'
    }
    else {
        condition = 'Blog';
    }

    if (loading) {
        return <Loading LoadingClass='Loading' />
    }

    else {
        return (
            <>
                <PageHeader title={condition} />
                <main className='blog-container'>
                    <div>
                        {
                            post.map((rs, i) => {
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
                </main>
            </>
        )
    }
}

export default Blog;
