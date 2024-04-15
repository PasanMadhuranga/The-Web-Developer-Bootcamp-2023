const bcrypt = require('bcrypt')

// salt means the part that is added to the password before hashing
const saltRounds = 10

// You can generate a salt and hash the password separately
const hashPwSeparately = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPw = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPw)
}

// You can also use the following function to generate a salt and hash the password in one go
const hashPassword = async (password) => {
  const hashedPw = await bcrypt.hash(password, saltRounds)
  console.log(hashedPw)
}

const login = async (password, hashedPw) => {
    const match = await bcrypt.compare(password, hashedPw)
    if (match) {
        console.log("LOGIN SUCCESSFUL")
    } else {
        console.log("LOGIN FAILED")
    }
}

// hashPwSeparately('password')
login(
  "password",
  "$2b$10$SoF4M69PYobb4sK2CKgPaOJ7nxOaiX5041wRf9nY4LAu/W0R1ZqqG");