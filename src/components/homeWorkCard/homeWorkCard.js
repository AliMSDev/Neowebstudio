import React, { useContext } from 'react'
import './homeWorkCard.scss';
import ShowWebsiteBtn from '../showwebsiteBtn/showwebsiteBtn';
import { LangContext } from '../__Context/langContext';
const HomeWorkCard = (props) => {
    const [fa] = useContext(LangContext);
    let conditionallang;

    if (fa) {
        conditionallang = 'نمایش وب سایت'
    }
    else {
        conditionallang = 'Show Website'
    }
    return (
        <div className='homeWorkCard colxs12 cols12 coll3'>
            <div>
                <figure>
                    <img src={props.image} alt='portfolio' />
                </figure>

                <div>
                    <h3>{props.name}</h3>
                    <p>
                        {props.text}
                    </p>
                    <ShowWebsiteBtn link={props.link} text={conditionallang} />
                </div>
            </div>
        </div>
    )
}

export default HomeWorkCard;
