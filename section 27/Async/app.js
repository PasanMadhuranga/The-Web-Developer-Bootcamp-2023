const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password !== '1234') throw 'Invalid Password'
    return `Welcome ${username}`
}

login('Pasan', '1234')
    .then((msg) => {
        console.log('Logged in')
        console.log(msg)
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })