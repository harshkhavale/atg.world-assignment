import { useState } from "react";
import Feed from "./components/Feed";
import Flex from "./components/Flex";
import Header from "./components/Header";


function App() {
  const [user,setUser] = useState(false);
  const handleUser = () => {
    setUser(!user);
  }
  return (
    <div className="App">
      <Header handleUser={handleUser} user={user}/>
      <Flex/>
      <Feed  user = {user}/>
    </div>
  );
}

export default App;
