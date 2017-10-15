interface ILoadPluginArgs {
  instrument?: string;
  instruments?: string[];
  onsuccess?: Function;
  soundfontUrl?: string;
  onprogress? (state: any, progress: any): void;
}

interface IKeyToNote {
  [key: string]: number;
}

interface INoteToKey {
  [note: string]: string;
}

interface IListenerData {
  /**
   * where we are now
   */
  now: number;
  /**
   * time when song ends
   */
  end: number;
  /**
   * channel note is playing on
   */
  channel: number;
  /**
   * 128 is noteOff, 144 is noteOn
   */
  message: 128 | 144;
  /**
   * the note
   */
  note: number;
  /**
   * the velocity of the note
   */
  velocity: number;
}

interface IPlayer {
  currentTime: number;
  endTime: number;
  playing: boolean;
  loadFile (file: string, onsuccess: Function): void;
  start (): void;
  resume (): void;
  pause (): void;
  stop (): void;
  removeEventListener (): void;
  addEventListener (cb: (data: IListenerData) => any): void;
}

interface IMidi {
  loadPlugin (cb: Function): void;
  loadPlugin (args: ILoadPluginArgs): void;
  setVolume (channel: number, volume: number): void;
  noteOn (channel: number, note: number, velocity: number, delay: number): void;
  noteOff (channel: number, note: number, delay: number): void;
  keyToNote: IKeyToNote;
  noteToKey: INoteToKey;
  Player: IPlayer;
}

declare var MIDI: IMidi;