import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./hebrew/components/NavBar";
import Home from "./hebrew/pages/Page";
import Aboutus from "./hebrew/pages/About";
import Portfolio from "./hebrew/pages/Port";
import Services from "./hebrew/pages/Services";
import Contact from "./hebrew/pages/Contact";
import Error from "./hebrew/pages/Error";
import "./App.css";

function App(props) {
    let { locale } = props
    let urlLocale = props.location.pathname.substring(1, 3)
    if ( locale !== urlLocale ) {
        props.setLocale(urlLocale)
        locale = urlLocale
    }

    return (
        <>
            <NavBar/>
            <Switch>
                <Route path={"/" + locale + "/"} exact render={propRouter => 
                    <Home {...propRouter} {...props} />
                } />
                <Route path={"/" + locale + "/about"} exact render={propRouter => 
                    <Aboutus {...propRouter} {...props} />
                } />
                {/* סוגי אתרים */}
                <Route path={"/" + locale + "/web"} exact render={propRouter => 
                    <Services {...propRouter} {...props} />
                } />
                {/* פרוייקטים */}
                <Route path={"/" + locale + "/port"} exact render={propRouter => 
                    <Portfolio {...propRouter} {...props} />
                } />
                <Route path={"/" + locale + "/contact"} exact render={propRouter => 
                    <Contact {...propRouter} {...props} />
                } />
                <Route exact render={propRouter => 
                    <Error {...propRouter} {...props} />
                } />
            </Switch>
        </>
    );
}

export default App;
