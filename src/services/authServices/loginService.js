
const getLogin = async (data) => {
  const url = `${process.env.BASE_URL}auth/login`
  return await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json',
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      return data
    })
}

const thirdLogin = (option) => {
  const url = `${process.env.BASE_URL}auth/${option}`
  return window.location.href = url
}

export {getLogin, thirdLogin}