import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SEO from "./SEO";
import NavBar from "./hebrew/components/NavBar";
import Home from "./hebrew/pages/Home";
import Aboutus from "./hebrew/pages/About";
import privacy from "./hebrew/pages/privacy";
import Portfolio from "./hebrew/pages/Portfolio";
import PortfolioPro from "./hebrew/pages/PortfolioPro";
import Price from "./hebrew/pages/Price";
import Contact from "./hebrew/pages/Contact";
import Blog from "./hebrew/pages/Blog";
import Error from "./hebrew/pages/Error";
import ProductPost from "./hebrew/pages/ProductPost";
import Services from "./hebrew/pages/Services";
import Shipping from "./hebrew/pages/Shipping";
import "./App.css";

function App() {
    return (
        <>
            <SEO />
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={Aboutus} />
                <Route exact path="/privacy" component={privacy} />

                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/systems" component={PortfolioPro} />

                <Route
                    exact
                    path="/development-services"
                    component={Price}
                />

                <Route exact path="/contact" component={Contact} />
                <Route exact path="/blog" component={Blog} />

                <Route
                    exact
                    path="/blog/website-types"
                    component={Services}
                />

                <Route
                    exact
                    path="/blog/woocommerce-add-product"
                    component={ProductPost}
                />

                <Route
                    exact
                    path="/blog/woocommerce-shipping"
                    component={Shipping}
                />

                {/* Redirects from old URLs */}
                <Redirect
                    exact
                    from="/portfolio2"
                    to="/systems"
                />

                <Redirect
                    exact
                    from="/price"
                    to="/development-services"
                />

                <Redirect
                    exact
                    from="/services"
                    to="/blog/website-types"
                />

                <Redirect
                    exact
                    from="/uploud_product_to_Woocommerce"
                    to="/blog/woocommerce-add-product"
                />

                <Redirect
                    exact
                    from="/woocommerce-add-product"
                    to="/blog/woocommerce-add-product"
                />

                <Redirect
                    exact
                    from="/shipping"
                    to="/blog/woocommerce-shipping"
                />

                <Redirect
                    exact
                    from="/woocommerce-shipping"
                    to="/blog/woocommerce-shipping"
                />

                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;