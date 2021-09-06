
import { withRouter} from "react-router-dom";
import React, { Component } from 'react'
import './App.scss';
import Routes from "./routes";
 class App extends Component {
 
  render() {
  return (
    <>
      <Routes/>
    </>
  );
}
}

export default withRouter(App);


