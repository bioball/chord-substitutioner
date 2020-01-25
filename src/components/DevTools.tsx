import React from "react";
import { createDevTools } from "redux-devtools";
import DockMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-alt-h"
    changePositionKey="ctrl-alt-q"
    defaultIsVisible={false}
    defaultPosition="right"
  >
    <LogMonitor theme="tomorrow"/>
  </DockMonitor>
);