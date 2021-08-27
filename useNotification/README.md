# @ib-hooks/use-notification

React Hook to **use browser notification easier.**

## Installation

#### yarn

`yarn add @ib-hooks/use-notification`

#### npm

`npm i @ib-hooks/use-notification`

## Usage

```js
import React from "react";
import useNotification from "@ib-hooks/use-notification";

function App() {
  const sendNotification = useNotification("Hello!");

  return <button onClick={sendNotification}>Send Hello</button>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                                                         | **Required** |
| ------------ | -------- | --------------------------------------------------------------------------------------- | ------------ |
| title        | string   | The text you want to notice.                                                            | yes          |
| options      | object   | [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification) | no           |

### Return

| **Return value** | **Type** | **Description**                                                              |
| ---------------- | -------- | ---------------------------------------------------------------------------- |
| Functions        | object   | If a user grants a permission, notification can be send using this function. |
