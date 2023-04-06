import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestWrapper from "./RestWrapper";
const RemoteApp = lazy(() => import("Remote/App"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RestWrapper>
        <RemoteApp />
      </RestWrapper>
    ),
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
