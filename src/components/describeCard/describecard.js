import React from 'react';
import './describecard.scss';
import SeemoreBtn from '../seemoreBtn/seemoreBtn';

const Describecard = (props) => {
    return (
        <div className='describeCard'>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <h3>{props.name}</h3>
                    <p>
                        {props.text}
                    </p>
                    <SeemoreBtn link={props.linkbtn} name={props.namebtn}/>
                </div>
            </div>
        </div>
    )
}

export default Describecard;
