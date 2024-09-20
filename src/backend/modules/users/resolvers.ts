import { Context } from '../../../backend/_types/context'
import { User } from '../../../backend/_types/users'

export default {
  User: {
    __resolveReference: async (user: User, context: Context): Promise<User> => {
      if (!user._id) {
        return null
      }

      return await context.database.notes.findOne(user._id)
    },
    username: (user: User): string => {
      return String(user.username || '')
    }
  }
}
