import React,{useEffect} from 'react'
import "./Header.css"
import instagram from "../../images/insta.png"
import location from "../../images/location.png"
import { Link } from 'react-router-dom'
const Header = () => {
  useEffect(() => {
    // Scroll to the top of the page after navigation
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='header'>
      <div id="headerContent">
        <div id="Title">
        <Link to="/" style={{textDecoration:'none',color: 'inherit' }}>Rustic Farm Villa</Link>
        </div>
        <div id='IntroTabs'>
          <div className='box'><Link to="/Photos" style={{textDecoration:'none',color: 'inherit' }}>Photos</Link></div>
          <div className='box'><Link to="/AboutUs" style={{textDecoration:'none',color: 'inherit' }}>About Us</Link></div>
          <div className='box'>Services</div>
          <div className='box'><Link to="/ContactUs" style={{textDecoration:'none',color: 'inherit' }}>Contact Us</Link></div>
          <div className='box'>Review</div>
        </div>
      </div>
      <div className='HeaderLinks'>
        <div className="HeaderImgs">
          <img src={instagram} alt="" srcset="" width="18" height="18" style={{cursor:"pointer"}} onClick={()=>{
            var newTab = window.open("https://www.instagram.com/rustic.farm.villa?igshid=YTQwZjQ0NmI0OA==", "_blank");
            newTab.focus();
          }}/>
        </div>
        <div className="HeaderImgs">
          <img src={location} alt="" srcset="" width="14" height="18" style={{cursor:"pointer"}} onClick={()=>{
            var newTab = window.open("https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu", "_blank");
            newTab.focus();
          }}/>
        </div>
      </div>
      <div id="HeaderBookNow" >
        <Link to="/ContactUs" style={{textDecoration:'none',color: 'inherit' }}>Book Now</Link></div>
    </div>
  )
}

export default Header