import gql from 'graphql-tag'
// TODO: don't forget to edit this to suit your auth needs
export default gql`
  query {
    user: user {
      id
      role
      token
    }
  }
`
