import { ObjectId } from 'mongodb'
import { SortDirectionType } from './enums/sortDirectionType'

export interface User {
  _id?: ObjectId
  email?: string
  username?: string
  password?: string
  token?: string
}
export interface UsersArgs {
  limit?: number
  searchText?: string
  skip?: number
  sortBy?: string
  sortDirection?: SortDirectionType
}
export interface UserArgs {
  _id: string
}

export interface CreateUserArgs {
  _id: string
  email: string
  username: string
  password: string
}

export interface LogInUserArgs {
  email: string
  password: string
}
export interface UpdateUserArgs {
  _id: string
  email: string
  username: string
  password: string
}

export interface DeleteUserArgs {
  _id: string
}