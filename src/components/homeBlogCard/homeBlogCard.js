import React from 'react'
import './homeBlogCard.scss';
import SeemoreBtn from '../seemoreBtn/seemoreBtn';
const HomeBlogCard = (props) => {
    return (
        <div className='homeBlogCard colxs12 cols12 coll3'>
            <div>
                <figure>
                    <img src={props.image} alt='blog' />
                    <img src={props.logo} alt='logo' />
                </figure>
                <div>
                    <h3>{props.name}</h3>
                    <time>{props.date}</time>
                    <p dangerouslySetInnerHTML={{__html:props.text}} />
                    <SeemoreBtn link={props.link} name='بیشتر بخوانید' />
                </div>
            </div>
        </div>
    )
}

export default HomeBlogCard;
