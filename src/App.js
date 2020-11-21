import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Cardgenerator from './components/Cardgenerator'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/card-generator">
          <Cardgenerator />
        </Route>
        <Route path="/">
          home
          </Route>
      </Switch>
    </Router>

  );
}

export default App;
