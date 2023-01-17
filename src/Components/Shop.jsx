import React from 'react';
import './Shop.css';
import Footer from '../Components/Footer';
import Box from '../Components/Box';
import whitetshirt from '../assest/19.webp'
import green from '../assest/18.webp'
import blackcoat from '../assest/16.webp'
import blue from '../assest/17.webp'
import back from '../assest/22.webp'
import gray from '../assest/19.webp'



const Shop = () => {
  return (
    <>
<div className='shopnow'>
<h1>SHOP NOW!</h1>

</div>
<div className='firstrowimg'>
         &nbsp;  &nbsp;<Box className="blackcoat" i={whitetshirt} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blue} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" /> &nbsp; &nbsp;
        </div>

        <div className='secondrowimg'>
        &nbsp; &nbsp; <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={back} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={gray} tittle="MEN'S BLACK COAT" doller="$20.20" />  &nbsp; &nbsp;
        </div>

        <div className='firstrowimg'>
         &nbsp;  &nbsp;<Box className="blackcoat" i={whitetshirt} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blue} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" /> &nbsp; &nbsp;
        </div>

        <div className='secondrowimg'>
        &nbsp; &nbsp; <Box className="blackcoat" i={green} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={blackcoat} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={back} tittle="MEN'S BLACK COAT" doller="$20.20" />
          <Box className="blackcoat" i={gray} tittle="MEN'S BLACK COAT" doller="$20.20" />  &nbsp; &nbsp;
        </div>


      <Footer/>
    </>
  )
}

export default Shop
