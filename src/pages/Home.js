import React, { Component } from 'react';

import Hero from '../components/Hero'


import '../styles/pages/Home.css'

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Hero/>
            </div>
        )
    }
}

export default Home