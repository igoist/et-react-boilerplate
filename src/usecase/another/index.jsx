import React from 'react';

class Another extends React.Component {
  render() {
    const name = 'igoist';

    return (
      <div>
        <h1 style={{ color: '#f23' }}>{ name }</h1>
        <h1 style={{ color: '#f23' }}>{ name }</h1>
        <h1 style={{ color: '#f23' }}>{ name }</h1>
      </div>
    );
  }
}

export default Another;
