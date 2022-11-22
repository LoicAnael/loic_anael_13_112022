import '../../main.css'
import { useNavigate } from 'react-router-dom'
import { fetchUserToken } from '../../service/service'
import { useState } from 'react'
function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const token = fetchUserToken({
      email: values.email,
      password: values.password,
    })
    console.log(token)
    navigate('/user')
  }
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="username"
            />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
            />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button class="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}
export default SignIn
