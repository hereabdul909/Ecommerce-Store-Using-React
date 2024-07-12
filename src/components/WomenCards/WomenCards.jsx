import React from 'react';
import { Mens , MenCard} from '../MenCards/StyledMenCards';
import { FiShoppingCart } from 'react-icons/fi';
import G1 from './images/g1.jpg'
import G2 from './images/g2.jpg'
import G3 from './images/g3.jpg'
import G4 from './images/g4.jpg'
import G5 from './images/g5.jpg'
import G6 from './images/g6.jpg'
import G7 from './images/g7.jpg'
import G8 from './images/g8.jpg'
import G9 from './images/g9.jpg'
import G10 from './images/g10.jpg'
import G11 from './images/g11.jpg'
import G12 from './images/g12.jpg'
import Links from '../PlayStore/Links';
function WomenCards({handleClick}) {
 const imagesUrl =[
   G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12
 ];

  return (
    <>
    <Mens>
      <h1>Women Dress</h1>
       <MenCard>
            {imagesUrl.map((url) => (
              <div className='box' key={url.id}>
                <img src={url} alt="Shirt"/>
                <p>$130 <span>$200</span></p>
                <p>GLOBAL DESI Women Embroidered A-line Kurta</p>
                <div className="btn" onClick={() => handleClick()} >
                <FiShoppingCart className='icon'></FiShoppingCart>
                  Add To Cart
                </div>
              </div>
            ))}
       </MenCard>
    </Mens>
    <Links/>
    </>
  );
}

export default WomenCards;
