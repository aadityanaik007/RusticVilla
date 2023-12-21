import React from 'react'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import "./AboutUs.css"
import prettyBedroom from "../../images/villa_images/prettyBedroom.jpeg"
const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="AboutUsSection">
                <div id="AboutUsTag" style={{padding:"100px"}}>
                    About
                </div>
                <div id="AboutUsDesc">
                    <p>Welcome to our enchanting villa nestled in the serene outskirts of Wada, Palghar, Maharashtra. Surrounded by the breathtaking beauty of nature, our villa is a hidden gem situated amidst lush greenery and majestic trees. The picturesque location provides a tranquil escape from the hustle and bustle of city life, offering a perfect retreat for those seeking peace and relaxation.
                    </p>
                    <br />
                    <p>As you step into our vintage-inspired villa, you'll be captivated by its timeless charm. The architecture exudes a classic elegance, creating an atmosphere of warmth and nostalgia. The villa is designed to seamlessly blend with its natural surroundings, offering guests a unique and immersive experience. With spacious interiors and thoughtful detailing, every corner of the villa tells a story, inviting you to unwind and make lasting memories.
                    </p>
                    <br />
                    The expansive yard is a haven for outdoor enthusiasts, featuring a variety of fun activities. Imagine spending evenings around a crackling bonfire, sharing stories and laughter under the starlit sky. For adventure seekers, the villa offers camping experiences, allowing you to connect with nature in a truly magical setting. Engage in the joy of tree plantation, contributing to the preservation of the environment and leaving a green legacy for generations to come. Our villa is not just a place to stay; it's a destination where you can immerse yourself in the beauty of nature and create unforgettable moments with your loved ones. Welcome to a retreat that combines vintage allure with the joy of outdoor living.
                </div>
            </div>
            <div id="AboutUsImageSection">
                <img src={prettyBedroom} alt="" srcset="" id="AboutUsImg"/>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs