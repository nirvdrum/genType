/** 
 * @flow strict
 * @generated
 * @nolint
 */
/* eslint-disable */
// $FlowExpectedError: Reason checked type sufficiently
type $any = any;

// $FlowExpectedError: Reason checked type sufficiently
import * as React from 'react';

// $FlowExpectedError: Reason checked type sufficiently
import * as Curry from 'bs-platform/lib/es6/curry.js';

// $FlowExpectedError: Reason checked type sufficiently
import * as HooksBS from './Hooks.bs';

export type vehicle = {| +name: string |};

export type cb = ({| +to: vehicle |}) => void;

export type callback<input,output> = (input) => output;

export type testReactContext = React$Context<number>;

export type testReactRef = React$Ref<number>;

// Type annotated function components are not checked by Flow, but typeof() works.
const $$default$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type Props = {| +vehicle: vehicle |};

export const $$default: typeof($$default$$forTypeof) = function Hooks(Arg1: $any) {
  const result = HooksBS.default({vehicle:[Arg1.vehicle.name]});
  return result
};

export default $$default;

// Type annotated function components are not checked by Flow, but typeof() works.
const anotherComponent$$forTypeof = function (_: {| +callback: ((void) => void), +vehicle: vehicle |}) : React$Node { return null };

export type anotherComponent_Props = {| +callback: (void) => void, +vehicle: vehicle |};

export const anotherComponent: typeof(anotherComponent$$forTypeof) = function Hooks_anotherComponent(Arg1: $any) {
  const result = HooksBS.anotherComponent({callback:Arg1.callback, vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const Inner_make$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type Inner_make_Props = {| +vehicle: vehicle |};

export const Inner_make: typeof(Inner_make$$forTypeof) = function Hooks_Inner(Arg1: $any) {
  const result = HooksBS.Inner.make({vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const Inner_anotherComponent$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type Inner_anotherComponent_Props = {| +vehicle: vehicle |};

export const Inner_anotherComponent: typeof(Inner_anotherComponent$$forTypeof) = function Hooks_Inner_anotherComponent(Arg1: $any) {
  const result = HooksBS.Inner.anotherComponent({vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const Inner_Inner2_make$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type Inner_Inner2_make_Props = {| +vehicle: vehicle |};

export const Inner_Inner2_make: typeof(Inner_Inner2_make$$forTypeof) = function Hooks_Inner_Inner2(Arg1: $any) {
  const result = HooksBS.Inner.Inner2.make({vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const Inner_Inner2_anotherComponent$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type Inner_Inner2_anotherComponent_Props = {| +vehicle: vehicle |};

export const Inner_Inner2_anotherComponent: typeof(Inner_Inner2_anotherComponent$$forTypeof) = function Hooks_Inner_Inner2_anotherComponent(Arg1: $any) {
  const result = HooksBS.Inner.Inner2.anotherComponent({vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const NoProps_make$$forTypeof = function (_: {||}) : React$Node { return null };

export type NoProps_make_Props = {||};

export const NoProps_make: typeof(NoProps_make$$forTypeof) = HooksBS.NoProps.make;

export const functionWithRenamedArgs: ({|
  +to: vehicle, 
  +Type: vehicle, 
  +cb: cb
|}) => string = function (Arg1: $any) {
  const result = Curry._3(HooksBS.functionWithRenamedArgs, [Arg1.to.name], [Arg1.Type.name], function (Argto: $any) {
      const result1 = Arg1.cb({to:{name:Argto[0]}});
      return result1
    });
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const componentWithRenamedArgs$$forTypeof = function (_: {|
  +Type: vehicle, 
  +to: vehicle, 
  +cb: cb
|}) : React$Node { return null };

export type componentWithRenamedArgs_Props = {|
  +Type: vehicle, 
  +to: vehicle, 
  +cb: cb
|};

export const componentWithRenamedArgs: typeof(componentWithRenamedArgs$$forTypeof) = function Hooks_componentWithRenamedArgs(Arg1: $any) {
  const result = HooksBS.componentWithRenamedArgs({Type:[Arg1.Type.name], to:[Arg1.to.name], cb:function (Argto: $any) {
      const result1 = Arg1.cb({to:{name:Argto[0]}});
      return result1
    }});
  return result
};

export const makeWithRef: ({| +vehicle: vehicle |}, ?$any) => React$Node = function (Arg1: $any, Arg2: $any) {
  const result = Curry._2(HooksBS.makeWithRef, {vehicle:[Arg1.vehicle.name]}, Arg2);
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const testForwardRef$$forTypeof = function (_: {| +vehicle: vehicle |}) : React$Node { return null };

export type testForwardRef_Props = {| +vehicle: vehicle |};

export const testForwardRef: typeof(testForwardRef$$forTypeof) = function Hooks_testForwardRef(Arg1: $any) {
  const result = HooksBS.testForwardRef({vehicle:[Arg1.vehicle.name]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const polymorphicComponent$$forTypeof = function <T1>(_: {| +p: [vehicle, T1] |}) : React$Node { return null };

export type polymorphicComponent_Props<T1> = {| +p: [vehicle, T1] |};

export const polymorphicComponent: typeof(polymorphicComponent$$forTypeof) = function Hooks_polymorphicComponent<T1>(Arg1: $any) {
  const result = HooksBS.polymorphicComponent({p:[[Arg1.p[0].name], Arg1.p[1]]});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const functionReturningReactElement$$forTypeof = function (_: {| +name: string |}) : React$Node { return null };

export type functionReturningReactElement_Props = {| +name: string |};

export const functionReturningReactElement: typeof(functionReturningReactElement$$forTypeof) = HooksBS.functionReturningReactElement;

// Type annotated function components are not checked by Flow, but typeof() works.
const RenderPropRequiresConversion_make$$forTypeof = function (_: {| +renderVehicle: React$ComponentType<{| +number: number, +vehicle: vehicle |}> |}) : React$Node { return null };

export type RenderPropRequiresConversion_make_Props = {| +renderVehicle: React$ComponentType<{| +number: number, +vehicle: vehicle |}> |};

export const RenderPropRequiresConversion_make: typeof(RenderPropRequiresConversion_make$$forTypeof) = function Hooks_RenderPropRequiresConversion(Arg1: $any) {
  const result = HooksBS.RenderPropRequiresConversion.make({renderVehicle:function (Arg11: $any) {
      const result1 = React.createElement(Arg1.renderVehicle, {number:Arg11.number, vehicle:{name:Arg11.vehicle[0]}});
      return result1
    }});
  return result
};

// Type annotated function components are not checked by Flow, but typeof() works.
const aComponentWithChildren$$forTypeof = function (_: {| +children: React$Node, +vehicle: vehicle |}) : React$Node { return null };

export type aComponentWithChildren_Props = {| +children: React$Node, +vehicle: vehicle |};

export const aComponentWithChildren: typeof(aComponentWithChildren$$forTypeof) = function Hooks_aComponentWithChildren(Arg1: $any) {
  const result = HooksBS.aComponentWithChildren({children:Arg1.children, vehicle:[Arg1.vehicle.name]});
  return result
};
