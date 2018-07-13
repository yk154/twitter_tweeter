import * as React from "react"
import Navigation from "../navigation/navigation"
import Feed from "../feed/feed"
// import { Button } from "reactstrap"

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* <Button color="primary">primary</Button> */}
        <Navigation history={this.props.history} match={this.props.match} />
        <Feed />
      </div>
    )
  }
}

export default HomePage
