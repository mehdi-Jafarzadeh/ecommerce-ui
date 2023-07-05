import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-up">
                <p>Webco programming group </p>
            </div>
            <div className="footer-down">
                <p>@copyright webco</p>
                <div className="footer-down-mid">
                    <p><img className="footer-icons" src="./assets/footer/youtube.png"  alt="youtube icon" /></p>
                    <p><img className="footer-icons" src="./assets/footer/instagram.png"  alt="instagram icon" /></p>
                    <p><img className="footer-icons" src="./assets/footer/telegram.png"  alt="telegram icon" /></p>
                    <p><img className="footer-icons" src="./assets/footer/github.png"  alt="github icon" /></p>
                </div>
                <p>world of programming</p>
            </div>
        </div>
    )
}

export default Footer;