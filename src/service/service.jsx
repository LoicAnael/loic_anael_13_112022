export async function fetchUserToken(email, password) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email, password),
  }

  const response = await fetch(
    'http://localhost:3001/api/v1/user/login',
    options
  )

  if (response.status === 400) {
    console.log('invalid fields')
  }

  const data = await response.json()
  const token = data.body.token
  return token
}
