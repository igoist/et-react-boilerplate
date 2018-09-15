import React from 'react';
import Counter from './Counter';
import Another from './Another';
import Img from './Img';
import '../public/css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', './map/img.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        console.log(res);
        this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {
    const res = this.state.res;
    let imgs = [];
    if (res.dirname) {
      imgs = [].map.call(res.imgs, (img, index) => {
        return <Img key={ index.toString() } basename={ img.basename } dirname={ res.dirname } />;
      });
    }
    return (
      <div>
        <h1>This is home!</h1>
        <Counter />
        <Another name={ 'igoist' } />
        { imgs }
      </div>
    );
  }
}

export default App;
