import React, { useContext } from 'react';
import { MenuContext } from '../__Context/menuContext';
import { Link } from 'react-router-dom';

const MeniItems = (props) => {
    const [menu, setMenu] = useContext(MenuContext)
    const handleclick = () => {
        setMenu(!menu);
    }
    const handlemouse=()=>{
        document.querySelector(`#${props.idnum}`).play();
    }
    return (
        <li onMouseOver={handlemouse}>
            <Link to={props.link} onClick={handleclick}>{props.name}</Link>
            <audio className="beep" controls="" preload="auto" id={props.idnum}>
                <source src={props.mp3} controls="" />
                <source src={props.ogg} controls="" />
            </audio>
        </li>
    )
}

export default MeniItems;
