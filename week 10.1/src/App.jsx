import { useState } from "react"
import AppBar from "./components/AppBar"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
  const [isLogin,setLogin]=useState(false)
  const [userName,setUserName]=useState("")

  return (
    <div>
      <AppBar userName={userName} isLogin={isLogin} setLogin={setLogin}/>
      {isLogin?<Home/>:<Login setLogin={setLogin} setUserName={setUserName}/>}


    </div>
  )
}

export default App
