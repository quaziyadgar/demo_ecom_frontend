import { Header, Footer, Navbar } from "components";
import { Home } from "pages";
import { Shop } from "pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/demo_ecom_frontend">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
