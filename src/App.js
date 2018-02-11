import React from 'react';
import Counter from './Counter';
import Another from './Another';


class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is home!</h1>
        <h1>This is home!</h1>
        <h1>This is home!</h1>
        <Counter />
        <Another />
      </div>
    );
  }
}

export default Index;