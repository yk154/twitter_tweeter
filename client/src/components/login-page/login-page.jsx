import * as React from "react"
// import Navigation from "../navigation/navigation"
import "./login-page.css"
import { Label, Input, FormGroup, Button } from "reactstrap"
import logo from "./src/logo.png"
import Modal from "react-responsive-modal"
import "font-awesome/css/font-awesome.min.css"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
// import ReactCoreImageUpload from "react-core-image-upload"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        username
      }
    }
  }
`

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`

class LoginPage extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    name: "",
    username: ""
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  // handleRes(res) {
  //   this.setState({
  //     // handle response
  //   })
  // }

  render() {
    const { open } = this.state
    return (
      <div>
        <div className="screen">
          <p className="p1"> See what’s happening in the world right now, </p>
          <p className="p2">Join Tweeter Today</p>
        </div>
        <div className="login">
          <img src={logo} alt={"logo"} />
          <div className="login-form">
            <h1>Sign In</h1>
            <div className="container">
              <Mutation mutation={LOGIN}>
                {login => {
                  return (
                    <FormGroup>
                      <form
                        className="formsignin"
                        onSubmit={async e => {
                          e.preventDefault()
                          const { data } = await login({
                            variables: {
                              email: this.state.email,
                              password: this.state.password
                            }
                          })

                          localStorage.setItem("token", data.login.token)
                          this.props.history.push("/Home")
                        }}
                      >
                        <Label for="exampleEmail">Email:</Label>
                        <div>
                          <Input
                            onChange={e => {
                              this.setState({ email: e.target.value })
                            }}
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="username@email.com"
                          />
                          <Label for="examplePassword" className="password">
                            Password:
                          </Label>
                          <Input
                            onChange={e => {
                              this.setState({ password: e.target.value })
                            }}
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="password"
                          />
                        </div>
                        <div className="button">
                          <Button color="primary" type="submit">
                            Login
                          </Button>
                          <Button color="danger" onClick={this.onOpenModal}>
                            Sign Up
                          </Button>
                        </div>
                      </form>
                    </FormGroup>
                  )
                }}
              </Mutation>
            </div>

            <Modal open={open} onClose={this.onCloseModal}>
              <div className="modalsize">
                <h1>
                  Welcome to Tweet <i className="fa fa-twitter" />
                </h1>

                <Mutation mutation={SIGNUP}>
                  {signup => {
                    return (
                      <FormGroup>
                        <form
                          onSubmit={async e => {
                            e.preventDefault()
                            try {
                              const { data } = await signup({
                                variables: {
                                  email: this.state.email,
                                  password: this.state.password,
                                  name: this.state.name,
                                  username: this.state.username
                                }
                              })
                              localStorage.setItem("token", data.signup.token)
                              this.props.history.push(`/Home`)
                            } catch (error) {
                              localStorage.removeItem("token")
                            }
                          }}
                          className="formsignup"
                        >
                          <h3>Sign Up </h3>
                          <Label for="User">Your Name:</Label>
                          <Input
                            type="text"
                            name="user"
                            id="user"
                            placeholder="Full Name"
                            onChange={e =>
                              this.setState({ name: e.target.value })
                            }
                          />

                          <Label for="exampleEmail">Email:</Label>
                          <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="user@email.com"
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                          <Label for="Username">Username:</Label>
                          <Input
                            type="text"
                            name="username"
                            id="Username"
                            placeholder="Username"
                            onChange={e =>
                              this.setState({ username: e.target.value })
                            }
                          />
                          <Label for="password">Password:</Label>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />

                          {/* <ReactCoreImageUpload
                      text="Upload Your Image"
                      className="pure-button"
                      inputOfFile="files"
                      url="./api/upload.php"
                      imageUploaded={this.handleRes}
                    /> */}

                          <Button
                            type="submit"
                            color="primary"
                            onClick={this.onOpenModal}
                          >
                            Sign Up
                          </Button>
                        </form>
                      </FormGroup>
                    )
                  }}
                </Mutation>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
