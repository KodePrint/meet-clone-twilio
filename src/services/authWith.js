
const getAuthUser = async (option) => {
  
  const url = `http://localhost:5000/api/v1/auth/${option}`
  return await fetch(url)
    .then(response => {
      console.log(response)
    })
}

export {getAuthUser}