import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Aboutus from "./pages/About";
import Services from "./pages/Services";
import Webs from "./pages/Port";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Page";
import "./App.css";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Aboutus}/>
                <Route exact path="/port" component={Services}/>
                <Route exact path="/web" component={Webs}/>
                <Route exact path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
