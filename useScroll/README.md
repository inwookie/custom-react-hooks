# @ib-hooks/use-scroll

React Hook to **get X/Y coordinates of current position of the scroll.**

## Installation

#### yarn

`yarn add @ib-hooks/use-scroll`

#### npm

`npm i @ib-hooks/use-scroll`

## Usage

```js
import React from "react";
import useScroll from "@ib-hooks/use-scroll";

function App() {
  const { scrollX, scrollY } = useScroll();

  return (
    <h1>
      Scroll Location: {scrollX} / {scrollY}
    </h1>
  );
}
```

### Return

| Return value | Type   | Description                                                              | Default value            |
| ------------ | ------ | ------------------------------------------------------------------------ | ------------------------ |
| Coords       | object | An object containing the x, y coordinates of the current scroll position | `{scrollX:0, scrollY:0}` |
