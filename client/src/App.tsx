import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"
import LoginPage from "./components/login-page/login-page"
import ProfilePage from "./components/profile-page/profile-page"
import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route exact={true} path="/Home" component={HomePage} />
          <Route exact={true} path="/myprofile" component={ProfilePage} />
          <Route exact={true} path="/:username" component={ProfilePage} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
