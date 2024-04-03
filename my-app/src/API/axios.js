// import axios from "axios";

// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

// export const { data } = await axios.get("/users/current");

// export const currentUser = await axios.get(
//   "https://goit-phonebook-api.herokuapp.com/users/current"
// );

import React, { Component } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

class Api extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    // const response = await axios.get("/search?query=react");
    const response2 = await axios.get("/users/current");
    console.log("🚀 ~ Api ~ componentDidMount ~ response2:", response2);
    // console.log("🚀 ~ Api ~ componentDidMount ~ response:", response);
    // this.setState({ articles: response.data.hits });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.length > 0 ? <ArticleList articles={articles} /> : null}
      </div>
    );
  }
}

export default Api;
