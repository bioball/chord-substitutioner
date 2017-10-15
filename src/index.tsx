import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

MIDI.loadPlugin({
  instrument: "acoustic_grand_piano",
  soundfontUrl: "soundfonts/",
  onsuccess () {
    ReactDOM.render(
      <App />,
      document.getElementById('root') as HTMLElement
    );
  }
});

registerServiceWorker();