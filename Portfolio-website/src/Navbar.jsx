import './index.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
    return (
        <>
            <div id='navbar'>
                <div className='nav-left'>
                    
                    <Link to="/"> <div className="home text down">HOME</div></Link>
                    <Link to="/about"><div className="about text down">ABOUT</div></Link>
                    <Link><div className="works text down">WORKS</div></Link>
                   
                    
                    
                </div>
                <div className='nav-centre'>
                    <Link to="/"><div className="rai text">RAI</div></Link>    
                </div>
                <div className='nav-right'>
                    <a href="#"><div className="contact text down">CONTACT</div></a>
                </div>
                <div className="line-parent">
                    <div className="group-child line"></div>
                    <div className="group-item line"></div>
                    <div className="group-inner line"></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
