import React from 'react'
import { Route } from "react-router-dom"
import WoltApp from "./Wolt/WoltApp"
import Menu from "./components/Menu/Menu"
import Front from "./components/Front/Front"
import EficodeApp from './Eficode/EficodeApp'
import FitnessApp from './FitnessApp/FitnessApp'
import './App.css'



function App() {

  const components = [
    {
      id: 1,
      name: "Restaurant Listing App",
      description: "This app displays a restaurant list and allows for sorting alphabetically and rolling a random restaurant from the list. Done as a part of the application process for Wolt's internship.",
      path: "/wolt"
    },
    {
      id: 2,
      name: "Eficode Routing App",
      description: "This app polls the HSL routing API to find you a public transport route from where you are to the Eficode Offices at Pohjoinen Rautatiekatu 25. Done as a part of the application process for Eficode's internship.",
      path: "/eficode"
    },
    {
      id: 3,
      name: "Fitness App",
      description: "A compilation of helpful tools to help you in physical training. Currently includes a timer and a weight calculator. Done as a part of the university course 'Fullstack web sovellus harjoitustyö'. WIP",
      path: "/fitness"
    }
  ]

  return (
    <>
      <Menu components={components} />
      <Route exact path="/" render={() => <Front components={components} />} />
      <Route exact path="/wolt" render={() => <WoltApp />} />
      <Route exact path="/eficode" render={() => <EficodeApp />} />
      <Route path="/fitness" render={() => <FitnessApp />} />
    </>
  )
}

export default App
