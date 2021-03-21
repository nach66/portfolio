import React, { Component } from 'react'
import { Redirect,Route,Switch } from 'react-router-dom'
import NoFound from './hebrew/pages/Error'
import "./App.css";
import App from "./App";
import AppE from "./AppE";
import ScrollToTop from "./ScrollToTop";

export default class LangRouter extends Component {
    constructor(props) {
        super(props)
        let locale = window.localStorage.getItem('locale')
        if (locale === null) {
                window.localStorage.setItem('locale', 'he')
                locale = 'he'
        }
        this.state = {
                locale: locale
        }
    }        
    setLocale = (newLocale) => {
        window.localStorage.setItem('locale', newLocale)
        this.setState({ locale: newLocale })
    }

    render() {
        const { locale } = this.state
        return (
            <Switch>
                <Route path="/" exact render={propRouter => {
                    return <Redirect to={locale + "/"} />
                }} />
                <Route path="/he/*" render={
                    propsRouter =>
                        <>
                            <ScrollToTop/>
                            <App
                                {...propsRouter}
                                locale={locale} 
                                setLocale={this.setLocale}
                            />
                        </>
                } />
                <Route path="/en/*" render={
                    propsRouter => 
                        <>
                            <ScrollToTop/>
                            <AppE 
                                {...propsRouter}
                                locale={locale} 
                                setLocale={this.setLocale} 
                            />
                        </>
                }/>
                <Route path="*" render={
                    propsRouter =>
                    <NoFound
                        {...propsRouter}
                        locale={locale} 
                        setLocale={this.setLocale}
                    />
                } />
            </Switch>
        )
    }
}