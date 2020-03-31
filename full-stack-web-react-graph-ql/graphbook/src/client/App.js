import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./assets/css/styles.css";

const posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      username: "Test User"
    }
  },
  {
    id: 1,
    text: "Lorem ipsum ok",
    user: {
      avatar:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      username: "Test User 2"
    }
  }
];

export default class App extends Component {
  state = { posts, postContent: "" };

  handlePostContentChange = event => {
    this.setState({ postContent: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: this.state.posts.length + 1,
      text: this.state.postContent,
      user: {
        avatar:
          "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
        username: "Fake User"
      }
    };
    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
      postContent: ""
    }));
  };

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta
            name="description"
            content="Newsfeed of all your friends on Graphbook"
          />
        </Helmet>
        <div className="postForm">
          <form onSubmit={this.handleSubmit}>
            <textarea
              value={this.state.postContent}
              onChange={this.handlePostContentChange}
              placeholder="Write your custom post!"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="feed">
          {this.state.posts.map(post => (
            <div key={post.id} className="post">
              <div className="header">
                <img src={post.user.avatar} style={{ borderRadius: 100 }} />
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
