import { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: "",
      commits: null,
      spyFound: false,
    };
  }

  fetchCommits = (formData) => {
    const url = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commits: data }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);

    // if (prevState.commits && prevState.commits[0].sha !== this.state.commits[0].sha) {
    //   console.log("oooohhh, new commits!");
    // }

    if (prevState.spyFound === this.state.spyFound) {
      console.log("I think I saw a spy or something.");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RepoForm onSubmit={this.fetchCommits} />
        {!this.state.spyFound && <Spy />}
        {this.state.commits && <CommitList commits={this.state.commits} />}
      </div>
    );
  }
}
