import { Context } from '../../../_types/context'

import { User, UsersArgs } from 'backend/_types/users'
import returnQuery from './_returnQuery'
import { SortDirectionType } from '../../../_types/enums/sortDirectionType'
import returnMongoSort from '../../../_utils/returnMongoSort'

export default async (_root: undefined, args: UsersArgs, context: Context): Promise<User[]> => {
  const query = await returnQuery(args)

  const { limit, skip, sortBy = 'createdAt', sortDirection = SortDirectionType.DESC } = args

  return await context.database.users
    .find(
      {
        ...query,
        deleted: { $ne: true }
      },
      {
        skip,
        limit,
        sort: returnMongoSort(sortBy, sortDirection)
      }
    )
    .toArray()
}
