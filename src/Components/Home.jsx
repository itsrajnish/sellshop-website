import React from 'react';
import './Home.css'
import men from '../assest/17.webp'
import men1 from '../assest/20.webp';
import men2 from '../assest/5.webp'
import men3 from '../assest/6.webp'
import Box from './Box';
import blackcoat from '../assest/16.webp'
import blue from '../assest/17.webp'
import black from '../assest/18.webp'
import gray from '../assest/19.webp'
import s1 from '../assest/s1.webp'
import s2 from '../assest/s2.webp'
import midmen from '../assest/l1.webp'
import whitetshirt from '../assest/19.webp'
import green from '../assest/18.webp'
import back from '../assest/22.webp'
import Boximg from './Boximg';
import oldmen from '../assest/12.webp'
import girl from '../assest/23.webp'
import music from '../assest/3.webp'
import logoo4 from '../assest/42.webp'
import logoo3 from '../assest/32.webp'
import logoo2 from '../assest/24.webp'
import logoo1 from '../assest/42.webp'
import logoo5 from '../assest/24.webp'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillGooglePlusSquare } from 'react-icons/ai'
import { BsWifi } from 'react-icons/bs'
import Footer from './Footer';



const Home = () => {
  return (
    <>

   
      <div className='container'>
        <div className='part1'>
          <div className='men'>
            <img src={men} />
          </div>

          <div className="heading">
            <h2><marquee direction="right">NEW COLLECTION</marquee></h2>
            <h1>MEN,S FASHION 2021</h1>
            <h3>STARTING AT $65.00 DON'T MISS OUT!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora <br />ratione possimus eveniet quam itaque eos earum similique consectetur enim,</p>
            <button >Shop Now</button>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='col1'>
          <img src={men1} />
        </div>

        <div className='col2'>
          <div>
            <h3>Fashion Collection 2021</h3>
            <p>BIG SALE OF THE MEN 2021 FASHION <br />UP TO 20% OFF!</p>
            <a href='#'>Shop Now</a>
          </div>
          <div>
            <img src={men2} />
          </div>

        </div>

        <div className='col3'>
          <div>
            <img src={men3} />
          </div>
          <div>
            <div>
              <h3>Fashion Collection 2021</h3>
              <p>BIG SALE OF THE MEN 2021 FASHION <br />UP TO 20% OFF!</p>
              <a href="https://www.w3schools.com">Shop Now</a>
            </div>
          </div>
        </div>
      </div>


      <div className='container3'>
        <div className='product'>
          <h1>Featured Product</h1>
        </div>
        <div className='fourimg'>
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />&nbsp;
          <Box className="blue" i={blue} tittle="MEN'S BLUE T-SHIRT" doller="$35.20" />&nbsp;
          <Box className="black" i={black} tittle="MEN'S BLACK T-SHIRT" doller="$25.20" />&nbsp;
          <Box className="gray" i={gray} tittle="MEN'S GRAY T-SHIRT" doller="$70.20" />

        </div>

      </div>

      <div className='load'>
        <p>LODE MORE</p>
      </div>

      <div className='container4'>
        <div className='s1s2'>
          <img src={s1} />
          <img src={s2} />
        </div>



        <div className='midmen'>
          <img src={midmen} />

        </div>

        <div className='content'>
          <h2>THE MAKER USC DRESS</h2>
          <h6>$256.00</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
            Sequi rem est eius maxime quae vel, voluptatibus doloribus <br />exercitationem soluta!
            Temporibus debitis doloribus alias <br />excepturi? Hic doloremque maxime optio aspernatur minima.</p>
          <h5>SIZE : S M XL</h5>
          <h5>COLOR : Red GREEN BLUE</h5>
          <h5>BRAND : CRAZY FASHION</h5>
          <h5>CATEGORY : FASHION MEN'S</h5>
        </div>

      </div>

      <div className='container5'>
        <div>
          <h1>New Arrival // Populat Product // Best Seller</h1>
        </div>

        <div className='firstrowimg'>
          <Box className="blackcoat" i={whitetshirt} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blue} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" />
        </div>

        <div className='secondrowimg'>
          <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={back} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={gray} tittle="MEN'S BLACK COAT" doller="$20.20" />
        </div>

      </div>

      <div className='load'>
        <p>LODE MORE</p>
      </div>

      <div className="container6">

        <Boximg className="boxs" im={oldmen} heading="&nbsp;&nbsp;&nbsp; FASHION STYLE FINE ART DRAWINGS" />&nbsp;
        <Boximg className="boxs" im={girl} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
        <Boximg className="boxs" im={music} heading="&nbsp;&nbsp;&nbsp;FASHION STYLE FINE ART DRAWINGS" />&nbsp;
      </div>

      <div className='load'>
        <p>LODE MORE</p>
      </div>

      <div className='logooo'>
        <img src={logoo1} />
        <img src={logoo2} />
        <img src={logoo3} />
        <img src={logoo4} />
        <img src={logoo5} />

      </div>

     
      <Footer/>
    </>
  )
}

export default Home







