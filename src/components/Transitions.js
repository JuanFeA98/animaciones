import React, { Component } from 'react';

import '../styles/components/Transitions.css'

class FirstAnimation extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>Transiciones</h2>
                <div className="Transitions">
                    <div className="Transitions__Simple">
                        <h3>Transiciones sencillas</h3>
                        <div className="Transitions__Simple--circle">
                        </div>
                    </div>
                    <div className="Transitions__Interaction">
                        <h3>Transiciones de interacción</h3>
                        <div className="Transitions__Interaction--container">
                            <div className="Transitions__Interaction--circle circle__TIA"></div>
                            <div className="Transitions__Interaction--circle circle__TIB"></div>
                        </div>
                        <div className="Transitions__Interaction--container">
                            <div className="Transitions__Interaction--circle circle__TIC"></div>
                            <div className="Transitions__Interaction--circle circle__TID"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FirstAnimation