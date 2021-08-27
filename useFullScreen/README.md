# @ib-hooks/use-full-screen

React Hook to **make any element go full screen.**

## Installation

#### yarn

`yarn add @ib-hooks/use-full-screen`

#### npm

`npm i @ib-hooks/use-full-screen`

## Usage

```js
import React from "react";
import useFullScreen from "@ib-hooks/use-full-screen";

function App() {
  const onChange = (isFull) =>
    console.log(isFull ? "Full Screen Mode" : "Exit Full Screen");

  const { element, triggerFull, exitFull } = useFullscreen(onChange);

  return (
    <div ref={element}>
      <h1>Hello</h1>
      <button onClick={triggerFull}>Full Screen Mode</button>
      <button onClick={exitFull}>Exit Full Screen</button>
    </div>
  );
}
```

### Arguments

| Argument | Type     | Description                                                     | Arguments        | Required |
| -------- | -------- | --------------------------------------------------------------- | ---------------- | -------- |
| onChange | function | Function to be called when the screen goes full screen or exits | isFull : Boolean | no       |

### Return

`useFullScreen` returns an object containing the following:

| Return value | Type      | Description                                                 |
| ------------ | --------- | ----------------------------------------------------------- |
| element      | React Ref | Ref to add to the element that you want to make full screen |
| triggerFull  | Function  | Function to make the element enter full screen              |
| exitFull     | Function  | Function to make the document exit full screen              |
