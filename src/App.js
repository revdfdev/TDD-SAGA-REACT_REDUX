import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import { connect } from "react-redux";
import { getAllPosts } from "./duck/FetchPost";
import ShareButton from "./components/button";
import ListItem from "./components/listitem";

class App extends Component {
  constructor(props) {
    super(props);
  }

  onButtonClick = () => {
    console.log("Button clicked");
    this.props.getAllPosts();
  }

  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.onButtonClick,
    };

    const { posts } = this.props;

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Post" desc="Click the button to render posts" />
          <ShareButton {...configButton} />
          {
            posts.length > 0 &&
            <div>
              {
                posts.map((post, index) => {
                  const { title, body } = post;
                  const configListItem = {
                    title,
                    desc: body,
                  };
                  return (
                    <ListItem key={index} {...configListItem} />
                  );
                })
              }
            </div>
          }
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { getAllPosts })(App);
