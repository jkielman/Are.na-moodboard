
console.log("hello");

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import ScrollToTop from "react-router-scroll-top";
import ResizableRect from 'react-resizable-rotatable-draggable'
import "./style.scss";

const atmosData = [
  {
   width:100,
   height:100,
   top:200,
   left:100
  },
  {
   width:100,
   height:100,
   top:400,
   left:400
  }
];

class Atmos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      rotateAngle: 0
    }
  }

  handleResize = (style, isShiftKey, type) => {
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    this.setState({
      top,
      left,
      width,
      height
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({
      rotateAngle
    })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }


  render() {
    const {width, top, left, height, rotateAngle} = this.state
    return (
      <div className="App">
        <ResizableRect
          left={left}
          top={top}
          width={width}
          height={height}
          rotateAngle={rotateAngle}
          minWidth={10}
          minHeight={10}
          zoomable='n, w, s, e, nw, ne, se, sw'
          onResize={this.handleResize}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
        />
      </div>
    )
  }
}

class Nav extends React.Component {

  addAnImage = () => {
    console.log('addAnImage()');
    let myObj = {
         width:500,
         height:500,
         top:300,
         left:200
    };

    atmosData.push(myObj);
    console.log(atmosData);
  }

  addANote = () => {
    console.log('addANote()')
  }
  render() {
    return(

      <nav className='nav'>
        <button className='nav__btn nav__btn--image' onClick={this.addAnImage}>Add an image</button>
        <button className='nav__btn nav__btn--note' onClick={this.addANote}>Add a note</button>
      </nav>

      )
  }
}

class Data extends React.Component {
  render() {
    const inputData = atmosData.map((data) =>
      <>
        <Atmos width={data.width} height={data.height} top={data.top} left={data.left} />
      </>
    )
    return(
    <div>
     {inputData}
    </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
       <Nav/>
       <Data/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
