import { ApolloError } from 'apollo-server-express'
import { Context } from '../../../_types/context'

import { User, CreateUserArgs } from 'backend/_types/users'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (_root: undefined, args: CreateUserArgs, context: Context): Promise<User> => {

  const {
    email,
    username,
    password
  } = args

  // check if user is existing

  const userExistsAlready: User = await context.database.users.findOne({email: args.email})

  // error if user is existing

  if (userExistsAlready) {
    throw new ApolloError('User already exists')
  }

  // encrypt password

  // build mongoos model?

  // create JWT to attach to user

  const createObject: User = {
    email,
    username,
    password
  }

  if (email) {
    createObject.email = email.toLowerCase()
  }

  if (username) {
    createObject.username = username
  }

  if (password) {
    const encryptedPassword = await bcrypt.hash(password)
    createObject.password = encryptedPassword
  }

  const res = await context.database.users.insertOne({
    ...createObject
  })

  const user: User = await context.database.users.findOne({ _id: res.insertedId })

const jwtOptions = {
  expiresIn: '24h'
}

  const token = jwt.sign(
    {
      _id: String(user._id)
    },
    'TEST_JWT_SECRET',
    jwtOptions
  )

  const generateToken = await context.database.users.findOneAndUpdate({
    _id: user._id
  },
  {
    $set: {
      token: token
    }
  })

  return generateToken.value
}
