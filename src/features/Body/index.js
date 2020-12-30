import React, { useState } from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import { startAlgoExecution } from "./actions";
import { bubbleSortAlgo } from '../../algorithms/algo';
import Bars from "../components/Bars";
import PropTypes from "prop-types";

const Body = ({ isAlgoRunning, handleStartAlgoExecution }) => {
    const [array, setArray] = useState(Array.from({length: 10}, () => Math.floor(Math.random() * 10)));

  const handleStartAlgo = () => {
    handleStartAlgoExecution(true);
    const sortedArray = bubbleSortAlgo(array);
    setArray(sortedArray);
    handleStartAlgoExecution(false);
  };

  return (
    <div className={styles.container}>
      {isAlgoRunning ? (
        <div>Loading...</div>
      ) : (
        <>
            {array.map((item, index) => <Bars key={`${index}-${item}`} id={index} value={item} />)}
            <button onClick={handleStartAlgo}>sort</button>
        </>
      )}
    </div>
  );
};

Body.propTypes = {
  isAlgoRunning: PropTypes.bool,
  handleStartAlgoExecution: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAlgoRunning: state.app.isAlgoRunning,
});

const mapDispatchToProps = (dispatch) => ({
  handleStartAlgoExecution: (value) => dispatch(startAlgoExecution(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
