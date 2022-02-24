import { useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import Page from "./Page";

import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Anikita");
  //const ProfileContext = createContext();
  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <TopNav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}
export default MainContent;
