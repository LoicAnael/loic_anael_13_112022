import '../../main.css'
import { useNavigate } from 'react-router-dom'
import { fetchUserToken } from '../../service/service'
import { useState } from 'react'
import { fillToken } from '../../redux/userslice'
import { useDispatch } from 'react-redux'
function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [isInValidToken, setIsInValidToken] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await fetchUserToken({
      email: values.email,
      password: values.password,
    })
    localStorage.setItem('token', token)
    dispatch(fillToken({ token }))

    if (token) {
      setIsInValidToken(false)
      navigate('/profile')
    } else {
      setIsInValidToken(true)
    }
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
        {isInValidToken ? (
          <div className="error-message">Invalid username or password</div>
        ) : null}
      </section>
    </main>
  )
}
export default SignIn
