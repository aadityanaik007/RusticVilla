import React  from 'react'
import "./Footer.css"
import instagram from "../../images/insta.png"
import location from "../../images/location.png"
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div id='Footer1'>
            <div style={{fontSize:"2.6rem",whiteSpace:"pre-wrap"}}>Plan a stay with us today.</div>
            <div class="bookARoom"><Link to="/ContactUs" style={{textDecoration:'none',color: 'inherit' }}>Book a Room</Link></div>
        </div>
        <div id="Footer2">
            <div id="footLinks" style={{margin:"0 0 0 2.3rem"}}>
                <div style={{fontSize:"2rem",marginBottom:"1rem"}}>
                    <Link to="/" style={{textDecoration:'none',color: 'inherit',fontFamily:"Roboto-Bold" }}>Rustic Farm Villa</Link>
                </div>
                <div>
                    <img src={instagram} alt="" srcset="" width="20" height="20" style={{marginRight:"1rem",cursor:"pointer"}} onClick={()=>{
                        var newTab = window.open("https://www.instagram.com/rustic.farm.villa?igshid=YTQwZjQ0NmI0OA==", "_blank");
                        newTab.focus();
                    }}/>
                    <img src={location} alt="" srcset="" width="15" height="20" style={{cursor:"pointer"}} onClick={()=>{
                        var newTab = window.open("https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu", "_blank");
                        newTab.focus();
                    }}/>
                </div>
            </div>
            <div id="introOptions">
                <div className='introOpt'><Link to="/AboutUs" style={{textDecoration:'none',color: 'inherit' }}>About Us</Link></div>
                <div className='introOpt'>Services</div>
                <div className='introOpt'><Link to='/ContactUs' style={{textDecoration:'none',color: 'inherit' }}>Contact Us</Link></div>
                <div className='introOpt'><Link to='/Photos' style={{textDecoration:'none',color: 'inherit' }}>Photos</Link></div>
                <div className='introOpt'><Link to="/" style={{textDecoration:'none',color: 'inherit' }}>Home</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Footer