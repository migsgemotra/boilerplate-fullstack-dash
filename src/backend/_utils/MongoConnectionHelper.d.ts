import { Db, MongoClient } from 'mongodb'
declare class MongoConnectionHelper {
  static createMongoClient: () => Promise<MongoClient>
  static createMongoDB: (db?: string) => Promise<Db>
  static runHealthCheck: () => Promise<boolean>
  static runStrictHealthCheck: () => Promise<boolean>
}
export default MongoConnectionHelper
