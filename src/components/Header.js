import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/components/Header.css'

import Logo from '../assets/network.png'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="Header__Logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                        <h1>Animations</h1>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header