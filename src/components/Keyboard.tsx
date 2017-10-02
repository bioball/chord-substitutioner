import * as React from 'react';
import '../styles/Keyboard.sass';

const octave = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

export default class Keyboard extends React.Component<{}, {}> {

  octave () {
    return octave.map((natural, key) => {
      if (natural) {
        return <div className="keyboard__key keyboard__key--natural" key={key} />;
      }
      return <div className="keyboard__key keyboard__key--accidental" key={key} />;
    });
  }
  
  keys () {
    return [1, 2, 3, 4].map((key) => {
      return this.octave();
    });
  }

  render () {
    return (
      <div className="keyboard">
        {
          this.keys()
        }
      </div>
    );
  }
}