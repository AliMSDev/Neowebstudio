import React from 'react'
import {Link} from 'react-router-dom';
import './seemoreBtn.scss';
const SeemoreBtn = (props) => {
    return (
        <Link className='seemorebtn' to={props.link}>{props.name}</Link>
    )
}

export default SeemoreBtn;
