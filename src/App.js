import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Experience from "./components/Pages/Experience/Experience";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router className="App" style={{ position: "relative" }}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/experience" component={Experience}></Route>
        <Route exact path="/resume" component={Resume}></Route>
      </Switch>
    </Router>
  );
}

export default App;
