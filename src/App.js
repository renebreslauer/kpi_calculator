import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, Footer } from './components/index'
import { Home, About, Retention, Growth } from './pages/index'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Retention">
            <Retention />
          </Route>
          <Route path="/Growth">
            <Growth />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
