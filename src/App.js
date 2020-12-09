import "./App.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import whatWeHaveDone from "./Components/whatWeHaveDone/whatWeHaveDone";
import whatWeDo from "./Components/whatWeDo/whatWeDo";
import howWeDoIt from "./Components/howWeDoIt/howWeDoIt";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/whatWeHaveDone" component={whatWeHaveDone} />
        <Route exact path="/whatWeDo" component={whatWeDo} />
        <Route exact path="/howWeDoIt" component={howWeDoIt} />
      </Switch>
    </Router>
  );
}

export default App;
