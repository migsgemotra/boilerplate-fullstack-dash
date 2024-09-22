import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    accessToken: localStorage.getItem("token")
  }
})

export default client
