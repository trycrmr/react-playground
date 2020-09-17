import React from "react";
import UserTracker from "./features/UserTracker";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <UserTracker>
        <Layout />
      </UserTracker>
    </div>
  );
}

export default App;
