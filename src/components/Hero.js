import React, { Component } from 'react';

import '../styles/components/Hero.css';
import Button from '../components/Button';

class Hero extends Component{
    render(){
        return(
            <div className="Hero">
                <div className="Hero__Content">
                    <div className="Hero__Content--description">
                        <h2>Animaciones para la web</h2>
                        <Button button={"Ver animaciones"} url={"/transitions"}/>   
                    </div>
                    <div className="circle b"></div>  
                </div>
                
            </div>
        )
    }
}

export default Hero