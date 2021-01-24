import React from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import { startAlgoExecution } from "./actions";
import PropTypes from "prop-types";
import $ from "jquery";

const Body = ({
  array,
  currentSwappers,
  currentSorted,
  currentBubbleTwo,
  currentMergeX,
  currentQuickTwo,
  pivot,
  currentHeapThree
}) => {
  const numWidth = Math.floor($(document).width() / (array.length * 3));
  const width = `${numWidth}px`;
  const numMargin =
    array.length < 5
      ? 10
      : array.length < 8
      ? 8
      : array.length < 11
      ? 6
      : array.length < 20
      ? 4
      : array.length < 50
      ? 3.5
      : array.length < 100
      ? 3
      : array.length < 130
      ? 2.5
      : 2;
  const margin = `${numMargin}px`;
  const color = numWidth > 20 ? "white" : "transparent";
  const numFont =
    numWidth > 70
      ? 20
      : numWidth > 60
      ? 18
      : numWidth > 50
      ? 16
      : numWidth > 40
      ? 14
      : numWidth > 30
      ? 12
      : numWidth > 20
      ? 10
      : 8;
  const fontSize = `${numFont}px`;

  return (
    <div className={styles.chartContainer}>
      {array.length
        ? array.map((number, index) => {
            const customClass = currentSwappers.includes(index)
              ? styles.swapElements
              : currentBubbleTwo.includes(index) ||
                currentQuickTwo.includes(index) || currentHeapThree.includes(index) ||
                currentMergeX.includes(index)
              ? styles.bubbleElement
              : pivot === index
              ? styles.pivotElement
              : currentSorted.includes(index)
              ? styles.defaultElement
              : styles.defaultElement;
            return (
              <div
                className={`${styles.arrayElement} ${customClass}`}
                key={index}
                style={{
                  height: `${number * 3}px`,
                  width: width,
                  marginLeft: margin,
                  marginRigh: margin,
                  color: color,
                  fontSize: fontSize,
                }}
              >
                {number}
              </div>
            );
          })
        : null}
    </div>
  );
};

Body.propTypes = {
  isAlgoRunning: PropTypes.bool,
  handleStartAlgoExecution: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAlgoRunning: state.app.isAlgoRunning,
  array: state.app.array,
  currentSwappers: state.app.currentSwappers,
  currentSorted: state.app.currentSorted,
  currentBubbleTwo: state.app.currentBubbleTwo,
  currentMergeX: state.app.currentMergeX,
  currentQuickTwo: state.app.currentQuickTwo,
  pivot: state.app.pivot,
  currentHeapThree: state.app.currentHeapThree
});

const mapDispatchToProps = (dispatch) => ({
  handleStartAlgoExecution: (value) => dispatch(startAlgoExecution(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
