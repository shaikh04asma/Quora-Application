
import Navbar from "./components/Navbar"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Notification from "./pages/Notification"
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>

    <Routes>
    <Route path=""element={<Home/>}/>
    <Route path="Notify/*"element={<Notification/>}/>
    </Routes>
    </BrowserRouter>
   
   </div>
  )
}

export default App
