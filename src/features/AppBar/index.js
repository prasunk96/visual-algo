import React from 'react'
import styles from './style.module.scss';
// import PropTypes from 'prop-types'

const AppBar = props => {
    return (
        <div className={styles.appBar}>
            <div className={styles.logo}>
                <p>VisualAlgo</p>
            </div>
        </div>
    )
}

// AppBar.propTypes = {

// }

export default AppBar
