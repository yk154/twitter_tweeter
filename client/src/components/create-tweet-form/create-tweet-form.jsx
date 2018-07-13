import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import "./title.css"
import "font-awesome/css/font-awesome.min.css"

const CREATE_TWEET = gql`
  mutation createTweet($text: String!) {
    createTweet(text: $text) {
      id
      text
      author {
        id
        name
        email
        username
      }
    }
  }
`

class CreateTweetForm extends React.Component {
  render() {
    let input

    return (
      <div className="title">
        <Mutation mutation={CREATE_TWEET}>
          {(createTweet, { data }) => {
            return (
              <div>
                <h2>
                  Join the conversation <i className="fa fa-comments" />
                </h2>
                <form
                  onSubmit={async e => {
                    e.preventDefault()
                    await createTweet({
                      variables: {
                        text: input.value
                      }
                    })
                    this.props.refetchFeedTweets()
                    input.value = ""
                  }}
                >
                  <textarea
                    ref={node => {
                      input = node
                    }}
                  />
                  <button type="submit" className="click">
                    Tweet!
                  </button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default CreateTweetForm
