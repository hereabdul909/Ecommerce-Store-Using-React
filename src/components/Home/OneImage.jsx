import React from "react";
import onepic from "../Home/Images/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg";
import styled from "styled-components";
const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px 15px 0 15px;
  margin-bottom: 1rem;

  img {
    border-radius: 10px;
    width: 100%;
  }
`;
function OneImage() {
  return (
    <Card>
      <img src={onepic} alt="Collection" />
    </Card>
  );
}

export default OneImage;
