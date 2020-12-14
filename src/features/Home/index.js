import React from 'react'
import AppBar from '../AppBar'
import Body from '../Body'
import styles from './style.module.scss';
// import PropTypes from 'prop-types'

const Home = (props) => {
    return (
        <div className={styles.container}>
            <AppBar />
            <Body />
        </div>
    )
}

// Home.propTypes = {

// }

export default Home

