import React from 'react';
import './showwebsiteBtn.scss';

const ShowWebsiteBtn = (props) => {
    return (
        <a href={props.link} target='_blank' rel="noopener noreferrer" className='showWebsite'>{props.text}</a>
    )
}

export default ShowWebsiteBtn;
