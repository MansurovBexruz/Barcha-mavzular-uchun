import { Component } from "react";
import { Button, Counter, Navbar } from "~/components";

interface AppState {
  counters: Array<{ id: number; count: number }>;
}

export class App extends Component<{}, AppState> {
  state = {
    counters: [
      { id: 1, count: 0, step: 1 },
      { id: 2, count: 0, step: 1 },
      { id: 3, count: 0, step: 1 }
    ]
  };

  handleIncrement = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters[idx].count += counters[idx].step;
    this.setState({ counters });
  };

  handleDecrement = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters[idx].count -= counters[idx].step;
    this.setState({ counters });
  };

  handleReset = () => {
    this.setState({
      counters: [
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 }
      ]
    });
  };

  handleDelete = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters.splice(idx, 1);
    this.setState({ counters });
  };

  componentDidUpdate(): void {
    console.log("App ComponentDidUpdate");
  }

  render() {
    console.log("App Render");
    const { counters } = this.state;
    return (
      <>
        <Navbar />
        <div className="container mx-auto flex flex-col gap-2 px-4 pt-4">
          <Button variant="blue" className="w-max" onClick={this.handleReset}>
            Reset
          </Button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              count={counter.count}
              onIncrement={() => this.handleIncrement(counter.id)}
              onDecrement={() => this.handleDecrement(counter.id)}
              onDelete={() => this.handleDelete(counter.id)}
            />
          ))}
        </div>
      </>
    );
  }
}
