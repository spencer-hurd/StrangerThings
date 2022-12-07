import "./App.css";
import Nav from "./components/Nav";
import AllRoutes from "./components/Routes";
import { fetchMe } from "./api/auth";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      // console.log(user);
    };
    getMe();
  }, [])
  
  return (<div className="App">
    <Nav />
    <AllRoutes setToken={setToken}/>
  </div>
  );
}

export default App;
