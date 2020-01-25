import { IAppState } from "../reducers";
import { Dispatch } from "redux";
import { connect, ComponentClass } from "react-redux";
import { AppAction } from "../actions";
import { IAppProps } from "../containers/App";

interface IDispatchProps {
  dispatch: Dispatch<AppAction>;
}

/**
 * Extend react's own typings for bugs that I'm seeing.
 */
interface IComponentClass<T, A> extends React.ComponentClass<T> {
  name?: string;
  /* tslint:disable no-any */
  new (props?: T, context?: any): React.Component<T, A>;
  /* tslint:enable no-any */
}

export const mapStateToProps = (state: IAppState) => state;

export const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({ dispatch });

const connectDecorator = connect(mapStateToProps, mapDispatchToProps);

/**
 * This is a fake type so TypeScript doesn't complain about the decorator.
 */
type Connector = <C extends ComponentClass<IAppProps>>(Component: C) => C;

/**
 * This is meant to be used as a decorator.
 */
export default connectDecorator as Connector;

export const createConnectedComponent = connectDecorator;