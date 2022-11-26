import '../../main.css'
import { fetchUserData } from '../../service/service'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, displayUser } from '../../redux/userslice'
import { useEffect } from 'react'

function Dashboard() {
  // const [newFirstName, setNewFirstName] = useState('')
  // const [newLastName, setNewLastName] = useState('')

  const dispatch = useDispatch()

  const user = useSelector(userSelector)
  const token = user.token
  console.log(user)

  useEffect(() => {
    fetchUserData({ token: token }).then((res) => {
      console.log(res)
      const firstName = res.body.firstName
      const lastName = res.body.lastName
      dispatch(displayUser({ firstName, lastName }))
    })
  })
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
