import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Navigation from "../navigation/navigation"
import Tweet from "../tweet/tweet"
import "./profile-page.css"
import "font-awesome/css/font-awesome.min.css"
import logo from "./src/logo.png"

const GET_MY_PROFILE = gql`
  query getMyProfile {
    me {
      id
      name
      email
      tweets {
        id
        text
        author {
          name
        }
      }
    }
  }
`

class MyProfile extends React.Component {
  render() {
    return (
      <div>
        <Navigation history={this.props.history} match={this.props.match} />
        <div className="profile-page">
          <div className="head">
            <img className="profileimg" src={logo} alt={"logo"} />
            <Query query={GET_MY_PROFILE}>
              {({ loading, error, data, refetch }) => {
                if (loading) {
                  return "Loading..."
                }

                if (error) {
                  return "OOps, somehing blew up."
                }

                return (
                  <div className="myprofile">
                    <p className="myname">
                      <i class="fa fa-user" /> {data.me.name}
                    </p>
                    <p className="myemail">
                      <i class="fa fa-envelope" /> {data.me.email}
                    </p>
                  </div>
                )
              }}
            </Query>
          </div>
          <div className="yours">
            <p>
              What you uploaded <i className="fa fa-comments" />
            </p>
          </div>

          <Query query={GET_MY_PROFILE}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return "Loading..."
              }

              if (error) {
                return "OOps, somehing blew up."
              }

              return (
                <div className="myFeed">
                  {data.me.tweets.map(tweet => {
                    return (
                      <Tweet
                        key={tweet.id}
                        text={tweet.text}
                        author={tweet.author}
                      />
                    )
                  })}
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

export default MyProfile
