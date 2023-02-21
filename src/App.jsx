// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import Home from "./component/Home"
import NavBar from "./component/NavBar"
import SocialLinks from "./component/SocialLinks"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
    </div>
  )
}

export default App
