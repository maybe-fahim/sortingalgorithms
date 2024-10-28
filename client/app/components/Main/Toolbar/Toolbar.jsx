import React, { Component } from "react";
import "./Toolbar.css";
import Button from "./Button.jsx"; // Importing new Button component

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;
    generateArray(87);
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
    const {
      array,
      algorithm,
      isRunning,
      sort,
    } = this.props;

    const speed = Math.max(0, 570 - Math.pow(array.length, 2));
    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div id="toolbar">
        <Button
          id="generateArray"
          onClick={!isRunning ? () => this.props.generateArray(array.length) : null}
          disabled={isRunning}
          style={{ color }}
        >
          Generate New Array
        </Button>
        <div className="separator"></div>
        <div id="arraySize" style={{ color }}>
          Change Array Size & Sorting Speed
        </div>
        <input
          id="changeSize"
          type="range"
          min="0"
          max="100"
          style={{ background: color, cursor }}
          disabled={isRunning}
          onChange={this.handleChange}
        />
        <div className="separator"></div>
        {["mergeSort", "quickSort", "heapSort", "bubbleSort"].map((alg) => (
          <Button
            key={alg}
            className={algorithm === alg ? "currentAlgorithmButton" : "algorithmButton"}
            onClick={() => this.handleClick(alg)}
            style={{ color }}
          >
            {alg.charAt(0).toUpperCase() + alg.slice(1).toLowerCase().replace("Sort", " Sort")}
          </Button>
        ))}
        <div className="separator"></div>
        {algorithm && (
          <Button
            id="sort"
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
            style={{ color }}
          >
            Sort!
          </Button>
        )}
      </div>
    );
  }
}

export default Toolbar;
