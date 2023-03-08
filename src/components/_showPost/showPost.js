import React, { useEffect, useState } from 'react';
import './showPost.scss';
import Loading from '../loading/loading';

const ShowPost = ({ match }) => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('../../assest/json/blog.json')
            .then(res => res.json())
            .then(finalResult => setPost(finalResult))
            .catch(err => console.error(err));

        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.title = 'Neoweb Studio | Blog';
    }, []);

    if (loading) {
        return <Loading LoadingClass='Loading' />
    }

    else {
        return (
            <section className='showPost'>
                <div>
                    <div>
                        <div>
                            <img src={post[match.params.id].image} alt='article' />
                        </div>
                        <h1>{post.title}</h1>
                        <time>{post.date}</time>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </section>
        )
    }
};
export default ShowPost;
