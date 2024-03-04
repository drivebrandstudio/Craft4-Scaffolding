import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../js/app";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Here is where SSR would gain us value. Pull in JS libraries easily, utilize them, have the Server
// return HTML to quickly render while we are fetching data to hydrate said HTML.

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const req = fetch("https://craft4-scaffolding.ddev.site/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{ping}",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return <h1>{`${data?.data?.ping}`}</h1>;
}
