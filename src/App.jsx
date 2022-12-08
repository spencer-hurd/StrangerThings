import "./App.css";
import Nav from "./components/Nav";
import AllRoutes from "./components/Routes";
import { fetchMe } from "./api/auth";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState({})
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMe = async () => {
      const response = await fetchMe();
      const user = await response;
      setUser(user)
      console.log("USER HERE: ", user)
    }
    getMe()
  }, [])
  
  return (<div className="App">
    <h3>{user.messages}</h3>
    <Nav setToken={setToken}/>
    <AllRoutes setToken={setToken} user={user}/>
  </div>
  );
}

export default App;
