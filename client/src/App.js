import {
  // useEffect,
  useState,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SaveToken from "./pages/SaveToken";

const App = () => {
  const [user, setUser] = useState(null);
  //   useEffect;
  return (
    <>
      <Router>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/login">
            <Login user={setUser} />
          </Route>
          <Route path="/SaveToken">
            <SaveToken />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
