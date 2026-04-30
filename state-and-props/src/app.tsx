import React from "react";
import { Counter } from "./counter";
import { Navbar, Button } from "./components";

interface AppState {
  counters: Array<{ id: number; count: number; step: number }>;
}

class App extends React.Component<{}, AppState> {
  state = {
    counters: [
      { id: 1, count: 0, step: 1 },
      { id: 2, count: 0, step: 1 },
      { id: 3, count: 0, step: 1 }
    ]
  };

  handleClick = () => {
    this.setState({
      counters: [
        { id: 1, count: 0, step: 1 },
        { id: 2, count: 0, step: 1 },
        { id: 3, count: 0, step: 1 }
      ]
    });
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

  handleDelete = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters.splice(idx, 1);
    this.setState({ counters });
  };

  handleChangeStep = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters[idx].step = Math.ceil(Math.random() * 20);
    this.setState({ counters });
  };

  handleAddCounter() {
    const { counters } = this.state;
    counters.push({ id: Math.random(), count: 0, step: 1 });
    this.setState({ counters });
  }

  render() {
    const { counters } = this.state;
    const countOfBiggerThanZero = counters.filter(c => c.count > 0).length;
    return (
      <>
        <Navbar count={countOfBiggerThanZero} onAddCounter={this.handleAddCounter} />
        <div className="container mx-auto pt-4 px-4 flex flex-col gap-2">
          <Button variant="blue" className="w-max " onClick={this.handleClick}>
            Reset
          </Button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              step={counter.step}
              count={counter.count}
              onIncrement={() => this.handleIncrement(counter.id)}
              onDecrement={() => this.handleDecrement(counter.id)}
              onDelete={() => this.handleDelete(counter.id)}
              onChangeStep={() => this.handleChangeStep(counter.id)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
