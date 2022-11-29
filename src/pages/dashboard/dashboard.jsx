import '../../main.css'
import { fetchUserData, updateUserProfile } from '../../service/service'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, displayUser } from '../../redux/userslice'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [isEditForm, setEditForm] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const dispatch = useDispatch()

  const user = useSelector(userSelector)
  const token = user.token

  useEffect(() => {
    fetchUserData({ token: token })
      .then((res) => {
        const firstName = res.body.firstName
        const lastName = res.body.lastName
        dispatch(displayUser({ firstName, lastName }))
      })
      .catch((error) => console.log(error))
  }, [token, dispatch])

  const handleEdit = () => {
    setEditForm(!isEditForm)
  }
  ////user change name////
  const handleUpdate = (e) => {
    e.preventDefault()

    updateUserProfile({
      token: token,
      firstName: newFirstName,
      lastName: newLastName,
    }).then(() => {
      fetchUserData({ token: token }).then((res) => {
        const firstName = res.body.firstName
        const lastName = res.body.lastName
        dispatch(displayUser({ firstName, lastName }))
        handleEdit()
      })
    })
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
        {isEditForm ? (
          <div className="edit-profile">
            <div className="edit-profile__form">
              <input
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                placeholder={user.firstName}
              ></input>
              <input
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                placeholder={user.lastName}
              ></input>
            </div>
            <div className="edit-profile__button">
              <button className="button__update" onClick={handleUpdate}>
                Update
              </button>
              <button className="button__cancel" onClick={handleEdit}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
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
