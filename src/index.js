import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home'
import reportWebVitals from './reportWebVitals'
import Header from './componemts/header/header'
import Footer from './componemts/footer/footer'
import SignIn from './pages/signIn/signIn'
import Dashboard from './pages/dashboard/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
