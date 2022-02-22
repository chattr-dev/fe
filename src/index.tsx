import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { SocketProvider } from "./providers/socket";
import { UserProvider } from "./providers/user";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m9dma6tz.us.auth0.com"
      clientId="ZAfjJV37ShOfVcBBoSVX0Orsay6mnDDT"
      redirectUri="http://localhost:3000/member"
    >
      <UserProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
