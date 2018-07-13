import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import CreateTweetForm from "../create-tweet-form/create-tweet-form"
import Tweet from "../tweet/tweet"
import travel from "./src/travel.jpeg"
import food from "./src/food.jpeg"
import "./feed.css"

const GET_TWEETS = gql`
  query {
    tweets(orderBy: createdAt_DESC) {
      id
      text
      attachment
      author {
        id
        name
      }
    }
  }
`

class Feed extends React.Component {
  render() {
    return (
      <div className="tweet">
        <div>
          <Query query={GET_TWEETS}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return "Loading..."
              }

              if (error) {
                return "OOps, somehing blew up."
              }

              return (
                <div className="frame">
                  <CreateTweetForm refetchFeedTweets={refetch} />
                  {data.tweets.map(tweet => {
                    return (
                      <Tweet
                        attachment={this.props.attachment}
                        key={this.props.id}
                        text={tweet.text}
                        author={tweet.author}
                      />
                    )
                  })}
                </div>
              )
            }}
          </Query>
          <div className="travel">
            <img src={travel} alt={"travel"} />
            <div className="text">
              <p> #Share_Your_Traveling_Experience</p>
            </div>
          </div>

          <div className="food">
            <img src={food} alt={"food"} />
            <div className="text2">
              <p> #Share_your_Food</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feed
