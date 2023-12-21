import React from 'react'
import "./Body.css"
import livingRoom from "../../images/villa_images/living_room.jpeg"
import bedroomBlack from "../../images/villa_images/blackSheetBDR.jpeg"
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg"
import food from "../../images/villa_images/food.png"
const Body = () => {
  return (
    <div className='Body'>
      <div className="image1">
        <img src={livingRoom} alt="" srcset="" width="1360" height="550" />
      </div>
      <div className="image2">
        <img src={bedroomBlack} alt="" srcset="" width="750" height="710" id="img2"/>
        <div className="image2-description">
          <div className="image2DescTitle" style={{marginLeft:"10px"}}>
            About the Hotel
          </div>
          <div className="image2Desc">
            Designed to be a sanctuary in the middle of the city, the Barbosa knows that a little comfort goes a long way.
          </div>
          <div className='image2LearnMoreBtn'>
            Learn More
          </div>
        </div>
      </div>
      <div id="image3">
        <div id="image3Intro">
          <div id="image3Title">
            Take a Tour
          </div>
          <div id="image3Desc">
            A stay at the Barbosa is more than a room. Explore a day in the life of a community of artists, innovators and travelers.
          </div>
          <div className='image3LearnMoreBtn'>
            View Gallery
          </div>
        </div>
        <div id="image3Image">
          <img src={lightBGBedroom} alt="" srcset="" width="750" height="710" />
        </div>
      </div>
      <div className="image4" style={{marginTop:"3.2rem"}}>
        <img src={food} alt="" srcset="" width="750" height="710" />
        <div className="image4-description">
          <div className="image4DescTitle" style={{marginLeft:"10px"}}>
            Amenities
          </div>
          <div className="image4Desc">
            Designed to be a sanctuary in the middle of the city, the Barbosa knows that a little comfort goes a long way.
          </div>
          <div className='image4LearnMoreBtn'>
            Learn More
          </div>
        </div>
      </div>
      <div id="reviews">
        <div id="review1">
          <pre>"Simple, Special! Hipper place <br/>to stay for the price."</pre>
          <br />
          <pre  style={{fontSize:"1.3rem",textAlign:"right"}}> – The Lionel</pre>
        </div>
        <div id="review2">
          <pre>“If I could live there, <br/>I would. And believe me, <br/>I’ve asked.”</pre>
          <pre style={{fontSize:"1.3rem",textAlign:"right"}}>– Milo F.</pre>
        </div>
      </div>
    </div>
  )
}

export default Body