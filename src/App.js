import { Header, Footer } from "components";
import { Home } from "pages";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import the styles in your JavaScript file
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
