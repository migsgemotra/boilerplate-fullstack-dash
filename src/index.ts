require('dotenv').config()
import 'graphql-import-node'

import {
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  ExpressContext
} from 'apollo-server-express'
import { GraphQLFormattedError, GraphQLError } from 'graphql'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import next from 'next'
import { parse } from 'url'
import { Database } from './backend/_types/database'
import _dbSetup, { initializeIndexes } from './backend/_utils/_dbSetup'

import { MongoClient } from 'mongodb'
import { resolvers, typeDefs } from './backend/modules'
import { Context } from './backend/_types/context'
import { verifyJWT } from './backend/_utils/cloudflareJwt'

const MONGODB_URI: string = 'mongodb+srv://gemotramigs:Phoenix1799!@boilerplateproject.3l7ty.mongodb.net/'

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use(compression())

const dev = process.env.NODE_ENV !== 'production'
const nextJSApp = next({ dir: './src/frontend', dev })
const handle = nextJSApp.getRequestHandler()

nextJSApp.prepare().then(async () => {
  //IF USING CONNECTING A MONGO DATABASE, uncomment out lines below
  const mongoClient: MongoClient = await MongoClient.connect(MONGODB_URI)
  const db = mongoClient.db('boiler_plate_sample')
  const database: Database = _dbSetup(db)
  await initializeIndexes(database)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (context: ExpressContext): Promise<Context> => {
      const ip = context.req.headers['CF-Connecting-IP'] || context.req.headers['X-Forwarded-For'] || context.req.ip

      return {
        database,
        ip
      }
    },
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (
        !(
          error.originalError instanceof AuthenticationError ||
          error.originalError instanceof ForbiddenError ||
          error.originalError instanceof UserInputError
        )
      ) {
        console.error(error)
      }
      return error
    }
  })

  server.applyMiddleware({ app, path: '/graphql' })

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Ready on port ${process.env.PORT || 3000}`)
  })
})
