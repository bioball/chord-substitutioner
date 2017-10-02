import * as React from 'react';
import './App.css';
import Keyboard from './components/Keyboard';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Keyboard />
      </div>
    );
  }
}

export default App;
