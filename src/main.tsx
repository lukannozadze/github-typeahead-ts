import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./provider/UserProvider.tsx";
import QueryProvider from "./provider/QueryProvider.tsx";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <UserProvider>
        <BrowserRouter>
        <BackgroundGradientAnimation className="absolute z-50 inset-0 overflow-auto ">
          <App />
        </BackgroundGradientAnimation>
        </BrowserRouter>
      </UserProvider>
    </QueryProvider>
  </React.StrictMode>
);
