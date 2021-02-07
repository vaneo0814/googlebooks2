import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Books from "./Components/Books";
import Nav from "./Components/Nav";
import NoMatch from "./Components/NoMatch";
// import Bookcard from "./Components/BookCard";
import SavedBooks from "./Components/SavedBooks"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Header/>
      <Switch>
        <Route exact path={["/react_googlebooks", "/search"]}>
          <Books/>
        </Route>
        <Route exact path="/savedbooks">
          <SavedBooks/>
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
