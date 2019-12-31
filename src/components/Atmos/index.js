import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResizableRect from "react-resizable-rotatable-draggable";



class Atmos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      rotateAngle: 0
    };
  }

  handleResize = (style, isShiftKey, type) => {
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    this.setState({
      top,
      left,
      width,
      height
    });
  };

  handleRotate = rotateAngle => {
    this.setState({
      rotateAngle
    });
  };

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    });
  };

  render() {
    const { width, top, left, height, rotateAngle } = this.state;
    return (
      <div className="atmos">
        <ResizableRect
          left={left}
          top={top}
          width={width}
          height={height}
          rotateAngle={rotateAngle}
          minWidth={10}
          minHeight={10}
          zoomable="n, w, s, e, nw, ne, se, sw"
          onResize={this.handleResize}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
        />
      </div>
    );
  }
}

export default Atmos;
