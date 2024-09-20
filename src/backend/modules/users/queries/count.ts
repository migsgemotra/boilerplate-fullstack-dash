import { Context } from 'backend/_types/context'

import { UsersArgs } from 'backend/_types/users'
import returnQuery from './_returnQuery'

export default async (_root: undefined, args: UsersArgs, context: Context): Promise<number> => {
  const query = await returnQuery(args)

  return await context.database.users.countDocuments(
    {
      ...query,
      deleted: { $ne: true }
    },
    {}
  )
}
