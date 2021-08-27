# @ib-hooks/use-title

React Hook to **update your document's title.**

## Installation

#### yarn

`yarn add @ib-hooks/use-title`

#### npm

`npm i @ib-hooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@ib-hooks/use-title";

function App() {
  useTitle("Hello World");
  return <h1>Hello World</h1>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                            | **Required** |
| ------------ | -------- | ------------------------------------------ | ------------ |
| title        | string   | The title you want to set on your document | yes          |
