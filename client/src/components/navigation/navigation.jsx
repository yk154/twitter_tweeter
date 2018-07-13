import * as React from "react"
import "./navigation.css"
import { Link } from "react-router-dom"
import { Navbar, Nav, NavLink, NavItem, Button } from "reactstrap"
import "font-awesome/css/font-awesome.min.css"
import gql from "graphql-tag"
import { Query } from "react-apollo"

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

class Navigation extends React.Component {
  onLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }

  render() {
    const token = localStorage.getItem("token")
    return (
      <div>
        <Navbar color="light" className="header">
          <Nav>
            <NavItem>
              <NavLink>
                <Link
                  to="/Home"
                  style={{
                    color: "red",
                    textDecoration: "none"
                  }}
                >
                  <p>Tweeter </p>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to={"/myprofile"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <p>
                    <i className="fa fa-user-circle" /> profile
                  </p>
                </Link>
              </NavLink>
            </NavItem>

            <Query query={GET_MY_PROFILE}>
              {({ loading, error, data }) => {
                if (loading) {
                  return "LOading..."
                }
                if (error) {
                  return (
                    <div className="error">
                      <p>
                        {" "}
                        Welcome To the site <i className="fa fa-twitter" />
                      </p>
                    </div>
                  )
                }
                return (
                  <div className="user">
                    Welcome, {data.me.name} <i className="fa fa-twitter" />
                    {token ? (
                      <button className="logout" onClick={this.onLogout}>
                        {" "}
                        Logout{" "}
                      </button>
                    ) : (
                      this.props.history.push("/")
                    )}
                  </div>
                )
              }}
            </Query>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
