import React from 'react'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import "./ContactUs.css"
// import Map from "../Map/Map"
import locationImg from "../../images/villa_images/locationImg.png"
const ContactUs = () => {
  return (
    <div>
        <Header/>
        <div className="ContactUsSection">
            <div id="ContactUsDiv" style={{padding:"10px"}}>
                <div id="ContactUsTag">
                    Contact
                </div>
                <br />
                <div id="ContactUsaddress" style={{fontFamily:"Roboto-Light"}}>
                    Rustic Farm Villa <br />
                    Near Mandawa Grampanchayat,<br />
                    Mandva, Wada, Maharashtra 421303, India
                </div>
                <br />
                <div id="phone" style={{fontFamily:"Roboto-Light"}}>
                    <p style={{fontFamily:"Roboto-Bold"}}>Phone</p>
                    +(91) 8108-266-499
                </div>
                <br />
                <div id="frontdesk" style={{fontFamily:"Roboto-Light"}}>
                    <p style={{fontFamily:"Roboto-Bold"}}>Front Desk</p>
                    +(91) 9892-208-884
                </div>
                <br />
                <div id="hotel reservation" style={{fontFamily:"Roboto-Light"}}>
                    <p style={{fontFamily:"Roboto-Bold"}}>Hotel Reservation</p>
                    +(91) 8108-266-399
                </div>
                <br />
                <div id="travelProvision" style={{fontFamily:"Roboto-Light"}}>
                    <p>Would you like us to arrange airport transfer <br />
                      with private car or taxi? You can reach us at</p>
                    +(91) 8452-989-433
                </div>


            </div>
            <div id="ContactUsMap">
                <img src={locationImg} alt="" srcset=""  style={{cursor:"pointer"}} onClick={()=>{
                     var newTab = window.open("https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu", "_blank");
                     newTab.focus();
                }}/>
            </div>
        </div>
            {/* <div id="AboutUsImageSection">
                <img src={prettyBedroom} alt="" srcset="" id="AboutUsImg"/>
            </div> */}
        <Footer/>
    </div>
  )
}

export default ContactUs