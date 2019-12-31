import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import ScrollToTop from "react-router-scroll-top";
import atmosData from "./components/atmosData";
import Atmos from "./components/Atmos";
import ImageMain from "./components/ImageMain";
import Projects from "./components/Projects";
import "./style.scss";

class App extends React.Component {
  state = {
    userData: []
  };

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

  render() {
    return (
      <div>
        <nav className="nav">
          <button className="nav__btn nav__btn--image" onClick={this.addImage}>
            Add an image
          </button>
        </nav>
        {this.state.userData}
        <Projects list={atmosData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
