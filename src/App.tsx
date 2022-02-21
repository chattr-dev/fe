import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import MiniDrawer from "./components/drawer";
import { Socket } from "phoenix";

const Member = lazy(() => import("./pages/member"));

function App() {
  const { user, isLoading } = useAuth0();
  const socket = new Socket("ws://localhost:4000/socket");

  socket.connect();

  let channel = socket.channel("user:123", {});
  channel
    .join()
    .receive("ok", (resp) => {
      console.log("Joined successfully", resp);
    })
    .receive("error", (resp) => {
      console.log("Unable to join", resp);
    });

  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <MiniDrawer user={user}>
          <Router>
            <Suspense fallback={<h4>Loading....</h4>}>
              <Routes>
                <Route path="/" element={<Member />}></Route>
              </Routes>
            </Suspense>
          </Router>
        </MiniDrawer>
      )}
    </>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <h4>Loading....</h4>,
});
