import React from 'react';
import './titleHead.scss'
const TitleHead = (props) => {
    return (
        <div className='titleHead'>
            <span></span>
            <div>
                <div>
                    <h2>{props.name}</h2>
                </div>
            </div>
            <span></span>
        </div>
    )
}

export default TitleHead;
