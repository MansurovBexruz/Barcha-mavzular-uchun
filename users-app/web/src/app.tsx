import { Component } from "react";
import { List, Single } from "./components";

export class App extends Component {
  render() {
    if (window.location.pathname === "/") return <List />;
    if (window.location.pathname !== "/") return <Single />;
  }
}
