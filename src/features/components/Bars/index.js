import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss';

const Bars = ({ value, id }) => {
    return (
        <div id={id} className={styles.bar} style={{height: `${value ? value*20 : 10}px`}}>
            <span>{value}</span>
        </div>
    )
}
 Bars.propTypes = {

}

export default Bars
