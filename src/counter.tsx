import { Component } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

interface CounterProps {
  children?: React.ReactNode;
}

export class Counter extends Component<CounterProps> {
  render() {
    return (
      <div className="flex gap-2">
        <Badge>{this.props.children === 0 ? "Zero" : this.props.children}</Badge>
        <Button variant="outline" onClick={() => console.log("Decrement")}>
          <span>Decrement</span>
        </Button>
        <Button variant="outline">Increment</Button>
      </div>
    );
  }
}
