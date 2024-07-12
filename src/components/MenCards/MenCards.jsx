import React from 'react';
import { Mens , MenCard} from './StyledMenCards';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/6.jpg';
import img7 from './Images/7.jpg';
import img8 from './Images/8.jpg';
import img9 from './Images/9.jpg';
import img10 from './Images/10.jpg';
import img11 from './Images/11.jpg';
import img12 from './Images/12.jpg';
import { FiShoppingCart } from 'react-icons/fi';
import Links from '../PlayStore/Links';

function MenCards({handleClick}) {
 const imagesUrl =[
   img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
 ];

  return (
    <>
    <Mens>
      <h1>Mens Shirts</h1>
       <MenCard>
            {imagesUrl.map((url) => (
              <div className='box' key={url.id}>
                <img src={url} alt="Shirt"/>
                <p>$50 <span>$100</span></p>
                <p>FAME FOREVER Men Striped Slim Fit Casual Shirt</p>
                <div className="btn" onClick={() => handleClick()} >
                <FiShoppingCart className='icon'></FiShoppingCart>
                 Add To Cart
                </div>
              </div>
            ))}
       </MenCard>
    </Mens>
    <Links/>
    `
    </>
  );
}

export default MenCards;
