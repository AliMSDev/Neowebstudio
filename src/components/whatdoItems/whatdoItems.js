import React from 'react';
import './whatdoItems.scss';

const WhatDoItems = (props) => {
    return (
        <div className='whatDoItems colxs12 coll3'>
            <figure>
                <img src={props.image} alt='what do' />
            </figure>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default WhatDoItems;
