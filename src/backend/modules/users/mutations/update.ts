import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'

import { User, UpdateUserArgs } from 'backend/_types/users'
import e from 'express'

export default async (_root: undefined, args: UpdateUserArgs, context: Context): Promise<User> => {
  const {
    _id,
    email,
    username,
    password
  } = args

  const updateObject: User = {}

  if (email) {
    updateObject.email = email
  }

  if (username) {
    updateObject.username = username
  }

  const res = await context.database.notes.findOneAndUpdate(
    {
      _id: new ObjectId(_id)
    },
    {
      $set: {
        ...updateObject,
        updatedAt: new Date()
      }
    },
    { returnDocument: 'after' }
  )

  return res.value
}
