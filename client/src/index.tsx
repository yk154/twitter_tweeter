import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import "sanitize.css/sanitize.css"
import App from "./App"
import "./index.css"
import client from "./apollo"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
)
