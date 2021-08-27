# @ib-hooks/use-axios

React Hook to **fetch or re-fetch api using axios easier.**

## Installation

#### yarn

`yarn add @ib-hooks/use-axios`

#### npm

`npm i @ib-hooks/use-axios`

## Usage

```js
import React from "react";
import useAxios from "@ib-hooks/use-axios";

function App() {
  const {
    response: { loading, data, error },
    refetch,
  } = useAxios({ url: API_URL });

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{error && error.message}</h2>
      <h3>{loading && "fetching..."}</h3>
      <button onClick={refetch}>Refetch API</button>
    </div>
  );
}
```

### Arguments

| **Argument**  | **Type** | **Description**                                            | **Required** | **Default value** |
| ------------- | -------- | ---------------------------------------------------------- | ------------ | ----------------- |
| options       | object   | [Reference](https://github.com/axios/axios#request-config) | yes          | undefined         |
| axiosInstance | object   | You can choose axios instance customly.                    | no           | defaultAxios      |

### Return

| **Return value**                     | **Type** | **Description**                                                  |
| ------------------------------------ | -------- | ---------------------------------------------------------------- |
| object(`response`, `refetch`)        | object   | See below                                                        |
| response(`loading`, `data`, `error`) | object   | Response data of fetch api.                                      |
| refetch                              | function | The refetch function executes when the user want to refetch api. |
