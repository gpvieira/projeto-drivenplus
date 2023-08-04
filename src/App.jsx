import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import SubsPage from "./pages/SubsPage/SubsPage"
import ChosenSubPage from "./pages/ChosenSubPage/ChosenSubPage"
import HomePage from "./pages/HomePage/HomePage"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions" element={<SubsPage />} />
          <Route path="/subscriptions/ID_DO_PLANO" element={<ChosenSubPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
