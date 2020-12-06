import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import {FaPhone, FaWhatsapp} from 'react-icons/fa';

export default function MobileSticky() {
    return (
        <div className="sticky" style={{display:'inline'}}>
            <a href="tel:055-6617145"
                style={{
                    background: 'rgb(7, 161, 58)',
                    color: 'white',
                }}>
                <FaPhone style={{
                    width:'50%'
                }}/>
            </a>

            <ReactWhatsapp className="wtsp" 
                style={{
                    color:'rgb(7, 161, 58)',
                    background: 'white',
                    height: '50px',
                    width:'50%',
                }}
                number="+972-556617145" 
                message="היי, אשמח להתעניין">
                <FaWhatsapp/>
            </ReactWhatsapp>
        </div>
    )
}
