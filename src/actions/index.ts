import { SoundAction } from "./soundActions";
import { LoaderAction } from "./loaderActions";
import { RouterAction, LocationChangeAction } from "react-router-redux";

export type AppAction = SoundAction | LoaderAction | RouterAction | LocationChangeAction;