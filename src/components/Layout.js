import React, { Component } from 'react';

import Header from './Header'

class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Layout