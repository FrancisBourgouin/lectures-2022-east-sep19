import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      repo: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    // console.log(this);
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    // console.log(this);
    const { owner, repo } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="owner" value={owner} onChange={this.handleChange} />
        <input type="text" name="repo" value={repo} onChange={this.handleChange} />
        <button>Fetch commits</button>
      </form>
    );
  }
}
