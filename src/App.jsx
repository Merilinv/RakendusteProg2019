import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Pages from "./pages/index.jsx";
import "typeface-lobster";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./store/configureStore.js";
const {store, persistor} = configureStore();
console.log("Store: ", store);

  class App extends React.Component {
     
    render() {
      return (
        <Provider store={store}>
           <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Route
                path={"/"} component={Header} />
              <Switch>
                  <Route path="/" exact component={Pages.HomePage} />
                  <Route path="/login" exact component={Pages.LoginPage} />
                  <Route path="/signup" exact component={Pages.SignupPage} />
                  <Route path="/users/:userId" exact component={Pages.UserPage} />
                  <Route path="/items/:itemId" exact component={Pages.ItemPage} />
                  <Route path="/checkout/cart" exact component={Pages.CartPage} />
                  <Route component={Pages.NotFound} />
              </Switch>
    
            </BrowserRouter>
           </PersistGate>
  
        </Provider>
      );
    }
  }

  export default App;