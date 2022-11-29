import '../../main.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { logout, userSelector } from '../../redux/userslice'
import { useDispatch, useSelector } from 'react-redux'
function Header() {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/" onClick={handleLogout}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!user.token ? (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            <span>Sign In</span>
          </Link>
        ) : (
          <div className="main-nav item-gap">
            <div className="item-gap">
              <i className="fa fa-user-circle"></i>
              <span>{user.firstName}</span>
            </div>
            <div className="item-gap">
              <i className="fa fa-arrow-circle-right"></i>
              <Link
                className="main-nav-item"
                to="/sign-in"
                onClick={handleLogout}
              >
                Sign out
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
