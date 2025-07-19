import "./app.css";

import router from "./router";
import Header from "./shared/components/header";

import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
