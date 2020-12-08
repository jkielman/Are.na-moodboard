import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import ScrollToTop from "react-router-scroll-top";
import atmosData from "./components/atmosData";
import Atmos from "./components/Atmos";
import ImageMain from "./components/ImageMain";
import Projects from "./components/Projects";
import Arena from "are.na";

import "./style.scss";

class App extends React.Component {
  state = {
    userData: []
  };

  componentDidMount() {

    const arena = new Arena();

    arena
      .channel("arena-influences")
      .get()
      .then(chan => {
        chan.contents.map(item => {
          console.log(item.title);
        });
      })
      .catch(err => console.log(err));

  }

  addImage = () => {
    this.setState({
      userData: [
        ...this.state.userData
        // <ImageMain width={100} height={100} top={200} left={200} />
      ]
    });

    let newObj = {
      width: 100,
      height: 100,
      top: 200,
      left: 200
    };




    atmosData.push(newObj);

    console.log(atmosData);

  };

  addNote = () => {

    console.log('Add note');

  }

  render() {
    return (
      <div>
        <nav className="nav">
          <button className="nav__btn nav__btn--image" onClick={this.addImage}>
            Add an image
          </button>
          <button className="nav__btn nav__btn--note" onClick={this.addNote}>
            Add a note
          </button>
        </nav>
        {this.state.userData}
        <Projects list={atmosData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
