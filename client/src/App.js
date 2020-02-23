import React from 'react'
import './App.css'
import WoltApp from "./Wolt/WoltApp"
import Menu from "./components/Menu/Menu"
import Front from "./components/Front/Front"
import { Route } from "react-router-dom"
import EficodeApp from './Eficode/EficodeApp'

function App() {
  return (
    <>
      < Menu />
      <Route exact path="/" render={() => <Front />} />
      <Route exact path="/wolt" render={() => <WoltApp />} />
      <Route exact path="/eficode" render={() => <EficodeApp />} />
    </>
  )
}

export default App
