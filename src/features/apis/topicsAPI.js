import axios from 'axios'
export function fetchTopic(topicName) {
  return axios({
    url: process.env.REACT_APP_GITHUB_GRAPHQL_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`
    },
    data: {
      query: `
        query getTopics($name: String!) {
          topic(name: $name) {
            name
            relatedTopics(first:10) {
              name
              stargazerCount
              id
            }
            stargazers {
              totalCount
            }
            id
            __typename
          }
        }
      `,
      variables: {
        name: topicName
      }
    }
  });
}
