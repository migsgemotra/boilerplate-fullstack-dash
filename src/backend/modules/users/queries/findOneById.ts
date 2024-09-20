import { ObjectId } from 'mongodb'
import { Context } from 'backend/_types/context'
import { User, UserArgs } from 'backend/_types/users'

export default async (_: undefined, { _id }: UserArgs, { database }: Context): Promise<User> => {
  const note = await database.users.findOne({ _id: new ObjectId(_id), deleted: { $ne: true } })
  return note
}
