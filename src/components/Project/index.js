import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageMain from "../../components/ImageMain";

const Project = props => {
  return (
    <>
      <ImageMain
        width={props.width}
        height={props.height}
        top={props.top}
        left={props.left}
      />
    </>
  );
};

export default Project;
