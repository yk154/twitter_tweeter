import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development"
})

export default client
