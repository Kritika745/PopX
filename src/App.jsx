import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingScreen from "./components/LandingScreen";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Setting from "./components/Setting";

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Setting/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
