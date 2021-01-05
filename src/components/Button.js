import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/components/Button.css'

class Button extends Component{
    render(){
        return(
            <Link className="Button" to={this.props.url}>
                {this.props.button}
            </Link>
        )
    }
}

export default Button