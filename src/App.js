import { Footer, Navbar } from "components";
import { Home, Shop, AboutUs, Service, Blog, Contact, Cart, Checkout, ThankYouPage } from "pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="demo_ecom_frontend">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/thankyou" component={ThankYouPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
