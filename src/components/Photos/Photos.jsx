import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Photos.css"
import dinningTable from "../../images/GalleryImages/diningTable.jpeg"
import outdoor1 from "../../images/GalleryImages/outdoor1.jpeg"
import outdoor2 from "../../images/GalleryImages/outdoor2.jpeg"
import outdoor3 from "../../images/GalleryImages/outdoor3.jpeg"
import outdoor4 from "../../images/GalleryImages/outdoor4.jpeg"
import tent1 from "../../images/GalleryImages/tent1.jpeg"
const Photos = () => {
  return (
    <div>
        <Header/>
        <div className='PhotosSection'>
            <div id="PhotosTag" style={{padding:"100px"}}>
              Take a Tour
            </div>
            <div id="PhotosDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt 
              ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa.  <br />Fermentum iaculis eu
              non diam. Leo integer malesuada nunc vel. Aliquam ultrices <br /> sagittis orci  a scelerisque purus 
              semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
            </div>
        </div>
        <div className="GallerySection">
          <div>
            <img src={dinningTable} alt="" />
            <img src={outdoor1} alt="" />
            <img src={outdoor2} alt="" />
            <img src={outdoor3} alt="" />
            <img src={outdoor4} alt="" />
            <img src={tent1} alt="" />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Photos