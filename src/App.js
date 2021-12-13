import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router';
import HomePage from './components/HomePage/Home';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import NavContainerRR from './components/Nav/NavContainer';
import FindUsers from './components/FindUsers/FindUsers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavContainerRR/>
        <div className = 'content'>
          <Route path = '/home'><HomePage/></Route>
          <Route path = '/dialogs'><Dialogs/></Route>
          <Route path = '/findUsers'><FindUsers /></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;