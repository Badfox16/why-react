import React from 'react';
import logo from '../logo.svg';


function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} className='logo' alt='Alguma coisa'></img>
                <h3 className='nav-title'>ReactFacts</h3>
                <h4 className='nav-project'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}

export default Navbar;