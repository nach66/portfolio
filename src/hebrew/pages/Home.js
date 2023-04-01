import React from 'react'
import Hero from '../components/Hero'
import Pro from '../components/Prolog'
import TestiSlider from '../components/TestiSlider'
import HoriForm from '../components/HoriForm'
import Puzzle from '../components/Puzzle'
import Ycube from '../components/Ycube'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default class Page extends React.Component {
    constructor(props){
        super(props)
        // this.state = {open : true}
        // this.makeTimer()
    }

    makeTimer(){
        setInterval(() => {
            this.setState({open: false})
        }, 5000)
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const { open } = this.state;

        return (        
        <>
            {/* <Modal 
                open={open} 
                // center={true}
                // focusTrapped={true}
                // showCloseIcon={false}
                onClose={this.onCloseModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
                animationDuration={400}
            >
                <div alt="logo" className="logos"/>
            </Modal> */}

                <Hero/>
                <Pro/>

                <div className="empty-blue"/>
                <div className="bf"/>    
                <TestiSlider/>
                <HoriForm/>
                <div className="af"/>  

                <Puzzle/>
                <Ycube/>
                <ContactForm/>
                <div className="empty-blue"/>
                <Footer/>
            </>
        );
    }
}