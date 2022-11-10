import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);
  }

  report = (event) => console.log(event.clientX, event.clientY);

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  componentDidUpdate() {}

  render() {
    return <span>🕵️</span>;
  }
}
