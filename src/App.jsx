import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import SubsPage from "./pages/SubsPage/SubsPage"
import ChosenSubPage from "./pages/ChosenSubPage/ChosenSubPage"
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import { UserContext } from "./contexts/UserContext"

function App() {
  const [user, setUser] = useState({})
  const [dadosPlano, setDadosPlano] = useState({})

  return (
    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions" element={<SubsPage />} />
          <Route path="/subscriptions/:id_do_plano" element={<ChosenSubPage dadosPlano={dadosPlano} setDadosPlano={setDadosPlano}/>} />
          <Route path="/home" element={<HomePage  dadosPlano={dadosPlano} setDadosPlano={setDadosPlano}/>} />
        </Routes>
      
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
