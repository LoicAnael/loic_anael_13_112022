import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home'
import reportWebVitals from './reportWebVitals'
import Header from './componemts/header/header'
import Footer from './componemts/footer/footer'
import SignIn from './pages/signIn/signIn'
import Dashboard from './pages/dashboard/dashboard'
import Error from './pages/error/error'
import Store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
