export async function fetchUserToken(email, password) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email, password),
  }

  try {
    const response = await fetch(
      'http://localhost:3001/api/v1/user/login',
      options
    )

    if (response.status === 400) {
      console.log('invalid fields')
    }

    const data = await response.json()
    const token = data?.body.token
    return token
  } catch (err) {
    console.log(err)
  }
}

export async function fetchUserData({ token }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await fetch(
      'http://localhost:3001/api/v1/user/profile',
      options
    )
    const res = await response.json()
    return res
  } catch (err) {
    console.log(err)
  }
}
export async function updateUserProfile({ token, firstName, lastName }) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  }

  try {
    const response = await fetch(
      'http://localhost:3001/api/v1/user/profile',
      options
    )
    const res = await response.json()
    return res
  } catch (err) {
    console.log(err)
  }
}
