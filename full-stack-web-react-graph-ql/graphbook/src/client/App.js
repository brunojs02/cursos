import React, { Component } from "react";
import "./assets/css/styles.css";

const posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "./assets/uploads/avatar1.png",
      username: "Test User"
    }
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "./assets/uploads/avatar2.png",
      username: "Test User 2"
    }
  }
];

export default class App extends Component {
  state = { posts };

  render() {
    return (
      <div className="container">
        <div className="feed">
          {this.state.posts.map(post => (
            <div key={post.id} className="post">
              <div className="header">
                <img src={post.user.avatar} />
                <h2>{post.user.username}</h2>
              </div>
              <p className="content">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
