import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import NavContainerRR from './components/Nav/NavContainer';
import FindUsers from './components/FindUsers/FindUsers';
import ProfileContainer from './components/HomePage/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <NavContainerRR/>
        <div className = 'content'>
          <Route path = '/profile/:userId?'><ProfileContainer/></Route>
          <Route path = '/dialogs'><Dialogs/></Route>
          <Route path = '/findUsers'><FindUsers /></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;