import { Plus } from "lucide-react";
import { Badge, Button } from ".";

export interface NavbarProps {
  count: number;
  onAddCounter: () => void;
}

export function Navbar({ count, onAddCounter }: NavbarProps) {
  return (
    <div className="bg-gray-200 w-full h-16 flex items-center">
      <div className="container px-4 mx-auto flex gap-2 items-center">
        <h2 className="text-2xl font-bold">Counter</h2>
        <Badge>{count}</Badge>
        <Button variant="outline" onClick={onAddCounter}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
