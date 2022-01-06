import './App.css';
import { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import NavContainerRR from './components/Nav/NavContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/HomePage/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginContainer from './components/LogIn/LoginContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home';
import React from 'react';
import { getUserData } from './Redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader';

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp()
  }

  render(){
    if(!this.props.isInit){
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <NavContainerRR/>
          <div className = 'content'>
            <Switch>
              <Route exact path = '/'><Home /></Route>
              <Route path = '/profile/:userId?'><ProfileContainer/></Route>
              <Route path = '/dialogs'><DialogsContainer/></Route>
              <Route path = '/findUsers'><FindUsersContainer /></Route>
              <Route path = '/login'><LoginContainer /></Route>
              <Redirect to = {'/'}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

let State = (state) =>{
  return {
    isInit : state.app.initialization
  }
}

export default compose(
  withRouter,
  connect(State , {initializeApp}),
)(App)