import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ScrollToTop from 'react-router-scroll-top';
import ResizableRect from 'react-resizable-rotatable-draggable'
import './style.scss';

const atmosData = [
  {
   width:100,
   height:100,
   top:200,
   left:300
  },
  {
   width:100,
   height:100,
   top:400,
   left:300
  }
];

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
      <div className='App'>
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
    );
  }
}

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

class App extends React.Component {
  state = {
    users: []
  };

  addImage = () => {
    this.setState({
      users: [
        ...this.state.users,
        <ImageMain width={100} height={100} top={200} left={200} />
      ]
    });
  };

  render() {
    const projectInput = atmosData.map(project => (
      <>
        <ImageMain
          width={project.width}
          height={project.height}
          top={project.top}
          left={project.left}
        />
      </>
    ));
    return (
      <div>
        <nav className='nav'>
          <button className='nav__btn nav__btn--image' onClick={this.addImage}>
            Add an image
          </button>
          {/*<button className='nav__btn nav__btn--note' onClick={this.addNote}>Add a note</button>*/}
        </nav>
        {this.state.users} {projectInput}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

