# @ib-hooks/use-fade-in

React Hook to **add fade-in animation to an element.**

## Installation

#### yarn

`yarn add @ib-hooks/use-fade-in`

#### npm

`npm i @ib-hooks/use-fade-in`

## Usage

```js
import React from "react";
import useFadeIn from "@ib-hooks/use-fade-in";

function App() {
  const fadeIn = useFadeIn(0.5, "ease-in-out", 0.5);

  return <h1 {...fadeIn}>This will fade in.</h1>;
}
```

### Arguments

| Argument    | Type   | Description                                     | Required | Default value |
| ----------- | ------ | ----------------------------------------------- | -------- | ------------- |
| duration    | number | Sets the duration of the transition. In seconds | no       | 1             |
| cubicBezier | string | Cubic bezier of fade-in animation.              | no       | "linear"      |
| delay       | number | Delays of transition's start. In seconds        | no       | 0             |

### Return

`useScroll` returns an object containing the following:

| Name  | Type      | Description                                                               |
| ----- | --------- | ------------------------------------------------------------------------- |
| ref   | React Ref | A ref created to fadeIn the element                                       |
| style | Object    | Style object containing `{opacity:0}` to give to the element as a default |

It's recommended to just spread the returned object on the element as shown in the Usage section above.
