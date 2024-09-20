import { Context } from '../../../_types/context'

import { User, CreateUserArgs } from 'backend/_types/users'

export default async (_root: undefined, args: CreateUserArgs, context: Context): Promise<User> => {

  const {
    email,
    username,
    password
  } = args

  const createObject: User = {
    email,
    username,
    password
  }

  if (email) {
    createObject.email = email
  }

  if (username) {
    createObject.username = username
  }

  const res = await context.database.users.insertOne({
    ...createObject
  })

  const user: User = await context.database.users.findOne({ _id: res.insertedId })

  return user
}
