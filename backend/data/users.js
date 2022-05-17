import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Neha Kumari',
    email: 'n@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
