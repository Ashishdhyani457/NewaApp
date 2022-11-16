import NavBar from './components/NavBar';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (<>
    <Router>
    <NavBar></NavBar>

    <Routes>

          <Route path="/" element={<News  key="general" country="in" category="general"></News>}></Route>
          <Route path="/business" element={<News  key="business" country="in" category="business"></News>}></Route>
          <Route path="/entertainment" element={<News  key="entertainment"country="in" category="entertainment"></News>}></Route>
          <Route path="/health" element={<News  key="health" country="in" category="health"></News>}></Route>
          <Route path="/sports" element={<News  key="sports" country="in" category="sports"></News>}></Route>
          <Route path="/science" element={<News key="science" country="in" category="science"></News>}></Route>
          <Route path="/technology" element={<News  key="technology" country="in" category="technology"></News>}></Route>
     
      </Routes>




</Router>
</>
    )
  }
}