import React from 'react'
import { Route } from "react-router-dom"
import WoltApp from "./Wolt/WoltApp"
import Menu from "./components/Menu/Menu"
import Front from "./components/Front/Front"
import EficodeApp from './Eficode/EficodeApp'
import FitnessApp from './FitnessApp/FitnessApp'
import DyslexiaApp from "./DyslexiaApp/DyslexiaApp"
import './App.css'



function App() {

  const components = [
    {
      id: 1,
      name: "Restaurant Listing App",
      description: "This app displays a restaurant list and allows for sorting alphabetically and rolling a random restaurant from the list. Done as a part of the application process for Wolt's internship.",
      path: "/wolt",
      component: <WoltApp />
    },
    {
      id: 2,
      name: "Eficode Routing App",
      description: "This app polls the HSL routing API to find you a public transport route from where you are to the Eficode Offices at Pohjoinen Rautatiekatu 25. Done as a part of the application process for Eficode's internship.",
      path: "/eficode",
      component: <EficodeApp />
    },
    {
      id: 3,
      name: "Fitness App",
      description: "A compilation of helpful tools to help you in physical training. Currently includes a timer and a weight calculator. Done as a part of the university course 'Fullstack web sovellus harjoitustyö'. WIP",
      path: "/fitness",
      component: <FitnessApp />
    },
    {
      id: 4,
      name: "Dyslexia App",
      description: "Some tools to help reading text for those with dyslexia. (Probably, since I do not actually understand how dyslexia works. Really it's just built to test Web Speech API, React contexts and some dynamic CSS stuff).",
      path: "/dyslexia",
      component: <DyslexiaApp />
    }
  ]

  return (
    <>
      <Menu components={components} />
      <Route exact path="/" render={() => <Front components={components} />} />
      {components.map(component => <Route key={component.id} path={component.path} render={() => component.component} />)}
    </>
  )
}

export default App
