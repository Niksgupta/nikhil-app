import React from "react";
// import { useEffect, useState } from "react";
// import logo from './logo.svg';
import './App.css';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/form';
// import FormControl from 'react-bootstrap/formControl';
// import Button from 'react-bootstrap/Button';
// import Columns from 'react-columns';
import Footer from "./footer";
import NavFun from "./Nav";
import HomeFun from "./components/Home";
import AboutFun from "./components/About";
import SymptomFun from "./components/Symptom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





import 'bootstrap/dist/css/bootstrap.min.css';
// import {AppBar, ToolBar, IconButton, Typography} from '@material-ui/core';
// import MenuIcon from '@material-ui/core/Menu';
// import axios from "axios";


function App() {
  return(
    <Router>
      <div>
        <NavFun />

        <Switch>
          <Route exact path="/" component={HomeFun} /> 
          <Route path="/symptom" component={SymptomFun} /> 

          <Route path="/about" component={AboutFun} /> 

        </Switch>
        <Footer />
      </div>
    </Router>
      

  )
  }
  

export default App;
