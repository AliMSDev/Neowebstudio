import React from 'react';
import logo from '../../assest/images/Logo/Logo.png';
import radial from '../../assest/images/Radial.png';
import './loading.scss';

const Loading = (props) => {
    return (
        <div className={props.LoadingClass}>
            <figure>
                <img src={logo} alt='Logo'/>
                <img src={radial} alt='radial hover'/>
            </figure>
        </div>
    )
}

export default Loading;
