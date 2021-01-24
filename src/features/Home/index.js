import React from 'react'
import AppBar from '../AppBar'
import Body from '../Body'
import Toolbar from '../Toolbar';
import styles from './style.module.scss';

const Home = (props) => {
    return (
        <div className={styles.container}>
            <AppBar />
            <div className={styles.bodyWrapper}>
                <div className={styles.toolbarContainer}>
                    <Toolbar />
                </div>
                <div className={styles.bodyContainer}>
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Home

