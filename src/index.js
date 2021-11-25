import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import store from './Redux/redux-store';


function rerenderEntireTree(props){
    ReactDOM.render(
        <React.StrictMode>
          <App dispatch = {store.dispatch.bind(store)} data = {props} store = {store}/>
        </React.StrictMode>,
        document.getElementById('root')
      );    
}

store.subscribe(() =>{
  rerenderEntireTree(store.getState())
})

rerenderEntireTree(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
