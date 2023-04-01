import React from 'react'
// import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default class Loader extends React.Component {

    constructor(props){
        super(props)
        this.state = {open : true}
        this.makeTimer()
    }

    makeTimer(){
        setInterval(() => {
            this.setState({open: false})
        }, 1000)
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const { open } = this.state;
        return ( 
            <Modal 
                open={open} 
                center={true}
                focusTrapped={true}
                showCloseIcon={false}
                onClose={this.onCloseModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
                animationDuration={400}
            >
                <div alt="logo" className="logos"/>
            </Modal>
        )
    }
};