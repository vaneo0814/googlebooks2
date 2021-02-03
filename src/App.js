import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from "./Components/Header";
import Books from "./Components/Books";
import Nav from "./Components/Nav";
// import Bookcard from "./Components/BookCard";
import SavedBooks from "./Components/SavedBooks"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Header/>
      <Route exact path="/react_googlebooks" component={Books}/>
      <Route exact path="/search" component={Books}/>
      <Route exact path="/savedbooks" component={SavedBooks}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
