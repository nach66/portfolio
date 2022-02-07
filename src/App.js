import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./hebrew/components/NavBar";
import Home from "./hebrew/pages/Home";
import Aboutus from "./hebrew/pages/About";
import Portfolio from "./hebrew/pages/Portfolio";
import Price from "./hebrew/pages/Price";
import Services from "./hebrew/pages/Services";
import Contact from "./hebrew/pages/Contact";
import Error from "./hebrew/pages/Error";
import ProductPost from "./hebrew/pages/ProductPost";
import "./App.css";

function App(props) {
    return (
        <>
            <NavBar/>
            <Switch>
            <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Aboutus}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/price" component={Price}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/uploud_product_to_Woocommerce" component={ProductPost}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;