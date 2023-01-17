import React from 'react';
import Footer from '../Components/Footer';
import Boximg from '../Components/Boximg';
import oldmen from '../assest/12.webp'
import girl from '../assest/23.webp'
import music from '../assest/3.webp'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div className='blog'>
        <h1>BLOG!</h1>
      </div>

      <div className="container6">

        <Boximg className="boxs" im={oldmen} heading="&nbsp;&nbsp;&nbsp; FASHION STYLE FINE ART DRAWINGS" />&nbsp;
        <Boximg className="boxs" im={girl} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
        <Boximg className="boxs" im={music} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
      </div>

      <div className="container6">

<Boximg className="boxs" im={oldmen} heading="&nbsp;&nbsp;&nbsp; FASHION STYLE FINE ART DRAWINGS" />&nbsp;
<Boximg className="boxs" im={girl} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
<Boximg className="boxs" im={music} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
</div>


      <Footer />
    </div>
  )
}

export default Blog
