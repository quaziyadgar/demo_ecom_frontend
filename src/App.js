import { Footer, Navbar } from "components";
import { Home, Shop, AboutUs, Service } from "pages";

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
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/services" component={Service} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;