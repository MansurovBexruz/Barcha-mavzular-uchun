import { Component } from "react";
import { Button, Badge } from ".";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

interface CounterProps {
  count: number;
  onDelete: () => void;
  onDecrement: () => void;
  onIncrement: () => void;
}
export class Counter extends Component<CounterProps> {
  componentDidUpdate(): void {
    console.log("Counter ComponentDidUpdate");
  }
  render() {
    console.log("Counter Render");
    const { count, onDelete, onDecrement, onIncrement } = this.props;
    return (
      <div className="flex gap-2">
        <Badge variant={count ? "secondary" : "default"}>{count || "Zero"}</Badge>
        <Button variant="destructive" onClick={onDelete}>
          <TrashIcon />
        </Button>
        <Button variant="outline" disabled={count === 0} onClick={onDecrement}>
          <MinusIcon />
        </Button>
        <Button variant="outline" onClick={onIncrement}>
          <PlusIcon />
        </Button>
      </div>
    );
  }
}
