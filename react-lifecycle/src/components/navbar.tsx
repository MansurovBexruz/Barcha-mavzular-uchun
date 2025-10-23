import { Component } from "react";

export class Navbar extends Component<{}> {
  componentDidUpdate(): void {
    console.log("Navbar ComponentDidUpdate");
  }
  render() {
    console.log("Navbar Render");
    return <h1 className="text-2xl font-bold">I am Counter Component</h1>;
  }
}
