import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

import { User, LogInUserArgs } from 'backend/_types/users'
import { ApolloError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

export default async (_root: undefined, args: LogInUserArgs, context: Context): Promise<User> => {
  const {
    email,
    password
  } = args


  const userObject: User = {}

  // check if user exists
  const user: User = await context.database.users.findOne({email: args.email})

  // if user does not exist, return error
  if (!user) {
    throw new ApolloError('User does not exist')
  }

  const jwtOptions = {
    expiresIn: '24h'
  }
  // check if password is correct
  if (user &&  await bcrypt.compare(password, user.password)) {
    // create a new tokens
    const token = jwt.sign(
      {
        _id: String(user._id)
      },
      'TEST_JWT_SECRET',
      jwtOptions
    )

    userObject.token = token

    context.database.users.findOneAndUpdate({
      email: email,
    },{
      token: token
    })
  } else {
    throw new ApolloError('Incorrect credential')
  }

  return
}
