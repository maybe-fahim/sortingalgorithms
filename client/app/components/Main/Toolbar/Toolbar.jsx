// Toolbar.jsx
import React, { Component } from "react";
import Button from "./Button"; // Import the Button component
import "./Toolbar.css";

class Toolbar extends Component {
  // ...rest of the component

  render() {
    const {
      array,
      algorithm,
      generateArray,
      sort,
      isRunning,
    } = this.props;

    const speed = Math.max(0, 570 - Math.pow(array.length, 2));
    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div id="toolbar">
        <Button 
          onClick={!isRunning ? () => generateArray(array.length) : null} 
          className={!isRunning ? "" : "disabled"}>
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
            onClick={() => this.handleClick(alg)} 
            className={algorithm === alg ? "currentAlgorithmButton" : "algorithmButton"}>
            {alg.charAt(0).toUpperCase() + alg.slice(1).replace("Sort", " Sort")}
          </Button>
        ))}
        <div className="separator"></div>
        <Button 
          onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
          className={isRunning ? "disabled" : ""}>
          Sort!
        </Button>
      </div>
    );
  }
}

export default Toolbar;
