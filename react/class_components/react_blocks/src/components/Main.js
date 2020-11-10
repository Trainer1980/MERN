import React, { Component } from 'react';
import styles from './Main.module.css'
import Subcontents from './Subcontents'
import Advertisement from './Advertisement'

class Main extends Component{
    render() {
        return(
            <div className = { styles.main }>
                <Subcontents />
                <Subcontents />
                <Subcontents />
                <Advertisement />
            </div> 
        );
    }
}

export default Main;