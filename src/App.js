import React from 'react'
import './App.css'
import WoltApp from "./components/woltapp/WoltApp"
import Menu from "./components/Menu/Menu"
import Front from "./components/Front/Front"
import { Route } from "react-router-dom"

function App() {
  return (
    <>
      < Menu />
      <Route exact path="/" component={Front} />
      <Route exact path="/woltapp" component={WoltApp} />
    </>
  )
}

export default App
