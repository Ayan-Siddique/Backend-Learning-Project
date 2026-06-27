import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./App.routes";
import UserProvider from "./features/auth/context/AuthContext.jsx";
// import "./styles.scss"

const App = () => {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
};

export default App;
