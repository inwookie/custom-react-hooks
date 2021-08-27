# @ib-hooks/use-prevent-leave

React Hook to **prompt the user for confirmation before leaving the page.**

## Installation

#### yarn

`yarn add @ib-hooks/use-prevent-leave`

#### npm

`npm i @ib-hooks/use-prevent-leave`

## Usage

```js
import React from "react";
import usePreventLeave from "@ib-hooks/use-prevent-leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };

  return <button onClick={saveChanges}>Save Changes</button>;
}
```

### Return

| **Return value** | **Type** | **Description**                                                                                                                   |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Functions        | object   | An object containing functions `enablePrevent` and `disablePrevent`, use this functions to enable/disable the leaving prevention. |
