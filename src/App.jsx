// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import About from "./component/About"
import Contact from "./component/Contact"
import Experience from "./component/Experience"
import Home from "./component/Home"
import NavBar from "./component/NavBar"
import Portfolio from "./component/Portfolio"
import SocialLinks from "./component/SocialLinks"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
