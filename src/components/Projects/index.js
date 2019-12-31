import React, { Component } from "react";
import ReactDOM from "react-dom";
import Project from "../../components/Project";



class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.list.map((projects, index) => {
          return (
            <div key={index}>
              <Project {...projects} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Projects;
