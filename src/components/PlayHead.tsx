import * as React from "react";
import { IAppProps } from "../containers/App";

export interface IPlayHeadProps extends IAppProps {
  onPlay (): any;
}

export default class PlayHead extends React.Component<IPlayHeadProps> {

  render () {
    return <div>
      <button onClick={this.props.onPlay}>Play</button>
    </div>;
  }

}