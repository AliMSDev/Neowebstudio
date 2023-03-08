import React from 'react'
import './footer.scss';
import top from '../../assest/images/top.png';
const Footer = () => {
    const clickhandler = (e) => {
        e.preventDefault();
        document.querySelector('html').scrollTop="0"
    }
    return (
        <footer>
            <div>
                <a href='#Top' onClick={clickhandler}><img src={top} alt="top arrow" /></a>
            </div>
            <div>
                <h4>Neoweb Studio 2020</h4>
            </div>
        </footer>
    )
}

export default Footer;
