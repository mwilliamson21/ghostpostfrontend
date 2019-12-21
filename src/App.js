import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostForm from "./components/PostForm";

class App extends React.Component {
  state = {
    posts : []
  }

  componentDidMount() {
    // do fetch request to get all posts
    fetch('https://localhost:8000/post/')
    .then()
    // set state with all posts
    this.setState({posts: input.value,
    })
  }
  render() {
    return (
      <div>
        <PostForm />
      </div>
    );
  }
}
 
export default App;
