import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResizableRect from "react-resizable-rotatable-draggable";
import Atmos from "../../components/Atmos";

//Add keys
class ImageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left
    };
  }

  render() {
    return (
      <>
        <Atmos
          width={this.state.width}
          height={this.state.height}
          top={this.state.top}
          left={this.state.left}
        />
      </>
    );
  }
}

export default ImageMain;
