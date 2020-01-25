import { SoundAction } from "./soundActions";
import { LoaderAction } from "./loaderActions";
import { RouterAction, LocationChangeAction } from "connected-react-router";

export type AppAction = SoundAction | LoaderAction | RouterAction | LocationChangeAction;