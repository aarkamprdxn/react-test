import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Post from './components/PostPage'
import About from './components/AboutPage'
import { Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu";
import Error from "./components/Error";
import './App.css'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <Menu />
      <Switch>
        <Route exact path="/" component={Post}/>
        <Route exact path="/About" component={About}/>
        <Route component={Error}/>
      </Switch>
      </div>
    </Provider>
  )
}

export default App
