import { Footer, Navbar } from "components";
import { Home, Shop, Aboutus } from "pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={Aboutus} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
