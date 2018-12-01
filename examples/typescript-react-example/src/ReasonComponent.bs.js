// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as React from "react";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as MyBannerWrapper from "./MyBannerWrapper.bs.js";

var component = ReasonReact.statelessComponent("ReasonComponent");

function onClick(param) {
  console.log("click");
  return /* () */0;
}

function make($staropt$star, person, $staropt$star$1, _children) {
  var message = $staropt$star !== undefined ? $staropt$star : "default message";
  var intList = $staropt$star$1 !== undefined ? $staropt$star$1 : /* :: */[
      0,
      /* [] */0
    ];
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", {
                          className: "App",
                          onClick: onClick
                        }, "ReasonReact " + (message + (" and intList: " + ($$String.concat(",", List.map((function (i) {
                                          return String(i);
                                        }), intList)) + (" and person name: " + person[/* name */0])))), ReasonReact.element(undefined, undefined, MyBannerWrapper.make(true, /* record */[/* text */"this is from ReasonComponent"], /* array */[])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

function minus($staropt$star, second) {
  var first = $staropt$star !== undefined ? $staropt$star : 0;
  return first - second | 0;
}

function useTypeDefinedInAnotherModule(x) {
  return x;
}

function tToString(t) {
  if (typeof t === "number") {
    return "A";
  } else if (t.tag) {
    return "C(" + (t[0] + ")");
  } else {
    return "B(" + (String(t[0]) + ")");
  }
}

function useRecordsCoord(param) {
  return param[/* x */0] + param[/* y */1] | 0;
}

export {
  component ,
  onClick ,
  make ,
  minus ,
  useTypeDefinedInAnotherModule ,
  tToString ,
  useRecordsCoord ,
  
}
/* component Not a pure module */
