import React,{useContext} from 'react';
import './pageHeader.scss';
import { LangContext } from '../__Context/langContext';


const PageHeader = (props) => {
    const [fa] = useContext(LangContext);
    let conditionClassName;
    if(fa)
    {
        conditionClassName = 'pageHeader'
    }
    else
    {
        conditionClassName = 'pageHeader En'
    }
    return (
        <header className={conditionClassName}>
            <h1>
                <span></span>
                {props.title}
                <span></span>
            </h1>
        </header>
    )
}

export default PageHeader;
