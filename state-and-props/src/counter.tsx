import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

interface CounterProps {
  count: number;
  step: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChangeStep: () => void;
  onDelete: () => void;
}

export function Counter({ count, onIncrement, onDecrement, step, onChangeStep, onDelete }: CounterProps) {
  return (
    <div className="flex gap-2">
      <Badge variant={count ? "secondary" : "default"}>{count || "Zero"}</Badge>
      <Button variant="outline" onClick={onChangeStep}>
        Step: {step}
      </Button>
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
