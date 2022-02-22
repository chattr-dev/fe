import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import MiniDrawer from "./components/drawer";

const Member = lazy(() => import("./pages/member"));

function App() {
  const { user, isLoading } = useAuth0();

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
