import "./App.css";
import Header from "./Components/Header";
import Search from "./Pages/Search";
import Logout from "./Components/Logout";
import Account from "./Components/Account";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <Header />
            <SignIn />
          </Route>
          <Route path="/logout">
            <Header />
            <Logout />
          </Route>
          <Route path="/account">
            <Header />
            <Account />
          </Route>
          <Route path="/">
            <Header />
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
