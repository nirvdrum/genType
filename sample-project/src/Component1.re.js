/* @flow strict */

const Component1 = require("./Component1.bs");
const ReasonReact = require("reason-react/src/ReasonReact.js");

import type {Component as ReactComponent} from 'React';
import type {actionless as ReasonReactactionless} from '../src/shims/ReactShim.shim.js';
import type {component as ReasonReactcomponent} from '../src/shims/ReactShim.shim.js';
import type {list} from '../src/shims/ReasonPervasives.shim.js';
import type {noRetainedProps as ReasonReactnoRetainedProps} from '../src/shims/ReactShim.shim.js';
import type {stateless as ReasonReactstateless} from '../src/shims/ReactShim.shim.js';
import type {variant as Component2variant} from './Component2.re';
export type Props = {|message?:string, children?:any|};
const component = ReasonReact.wrapReasonForJs(
  Component1.component,
  (function (jsProps: Props) {
     return Component1.make(jsProps.message, jsProps.children);
  }));
const plus = Component1.plus;
const concat = (function (Arg1, Arg2) { const result = Component1.concat(Arg1, (Arg2 === null ? undefined : Arg2)); return result });
const consumeVariant = Component1.consumeVariant;
const l = Component1.l;
const map = Component1.map;

exports.component = (component: React$ComponentType<Props>);
exports.plus = (plus: <T11009>(number, T11009) => number);
exports.concat = (concat: (string, ?string) => ?string);
exports.consumeVariant = (consumeVariant: (Component2variant) => number);
exports.l = (l: list<number>);
exports.map = (map: <T11519,T11517>((T11519) => T11517, list<T11519>) => list<T11517>);