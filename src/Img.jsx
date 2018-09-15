import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { basename, dirname } = this.props;
    dirname = './img/target';
    return (
      <div className='wrap'>
        <img src={ dirname + '/' + basename } />
      </div>
    );
  }
}

export default Img;
