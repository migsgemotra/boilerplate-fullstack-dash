import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'

import { User, DeleteUserArgs } from 'backend/_types/users'

export default async (_root: undefined, args: DeleteUserArgs, context: Context): Promise<User> => {

  const res = await context.database.users.findOneAndUpdate(
    {
      _id: new ObjectId(args._id)
    },
    {
      $set: {
        deleted: true,
        deletedAt: new Date(),
      }
    },
    { returnDocument: 'after' }
  )

  return res.value
}
