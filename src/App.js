import logo from './logo.svg';
import './App.css';
import { setState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Router , Route } from 'react-router';
import HomePage from './components/HomePage/Home';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav navbar = {props.data.navbar}/>
        <div className = 'content'>
          <Route path = '/home'><HomePage store = {props.store}/></Route>
          <Route path = '/dialogs'><Dialogs store = {props.store}/></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;