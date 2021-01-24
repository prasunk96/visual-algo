import React, { Component } from "react";
import styles from "./style.module.scss";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setArray,
  setAlgorithm,
  setCurrentSorted,
  setRunning,
} from "../Body/actions";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { quickSort } from '../../algorithms/quickSort';
import { getRandomArray } from "../../utils/helpers";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;

    generateArray(30);
    document.getElementById("changeSize").value = 50;
  }

  handleClick(algorithm) {
    const { updateAlgorithm } = this.props;

    updateAlgorithm(algorithm);
  }

  handleChange(evt) {
    const { generateArray } = this.props;

    generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
  }

  render() {
    const { array, algorithm, generateArray, sort, isRunning } = this.props;

    const speed =
      570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

    return (
      <div id="toolbar" className={styles.toolbar}>
        <div
          id={!isRunning ? "generateArray" : "generateArrayX"}
          className={styles.generateButtonWrapper}
        >
          <button
            className={styles.generateButton}
            disabled={isRunning}
            onClick={!isRunning ? () => generateArray(array.length) : null}
          >
            New Array
          </button>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.slider}>
          <div id="arraySize" className={styles.arraySize}>
            {`Size & Speed`}
          </div>
          <input
            id="changeSize"
            type="range"
            min="0"
            max="100"
            disabled={isRunning}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.separator}></div>
        <div
          className={
            algorithm === "mergeSort"
              ? styles.currentAlgorithmButton
              : styles.algorithmButton
          }
          onClick={() => this.handleClick("mergeSort")}
        >
          Merge Sort
        </div>
        <div className={styles.separator}></div>
        <div
          className={
            algorithm === "quickSort"
              ? styles.currentAlgorithmButton
              : styles.algorithmButton
          }
          onClick={() => this.handleClick("quickSort")}
        >
          Quick Sort
        </div>
        <div className={styles.separator}></div>
        <div
          className={
            algorithm === "heapSort"
              ? styles.currentAlgorithmButton
              : styles.algorithmButton
          }
          onClick={() => this.handleClick("heapSort")}
        >
          Heap Sort
        </div>
        <div className={styles.separator}></div>
        <div
          className={
            algorithm === "bubbleSort"
              ? styles.currentAlgorithmButton
              : styles.algorithmButton
          }
          onClick={() => this.handleClick("bubbleSort")}
        >
          Bubble Sort
        </div>
        <div className={styles.separator}></div>
        {
          <div id="sort" className={styles.sortButtonWrapper}>
            <button
              className={styles.sortButton}
              disabled={isRunning}
              onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
            >
              Sort
            </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  array: state.app.array,
  algorithm: state.app.algorithm,
  isRunning: state.app.isRunning,
});

const mapDispatchToProps = () => (dispatch) => ({
  generateArray: (length) => {
    let array = getRandomArray(10, 90, length);
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
  },

  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },

  sort: (algorithm, array, speed) => {
    let doSort =
      algorithm === "bubbleSort"
        ? bubbleSort
        : algorithm === "mergeSort"
        ? mergeSort
        : algorithm === "quickSort" ?
        quickSort : null;
    dispatch(setCurrentSorted([]));
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
