import React from "react";
import styled from "styled-components";
import watch from "../PlayStore/images/watch.gif";
const Watch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  h1 {
    border-bottom: 4px solid orange;
    font-size: 2.2rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    @media (max-width: 700px) {
      font-size: 1.2rem;
      margin-top:1rem;
      margin-bottom:0;
    }
  }
  img {
    width: 100%;
    margin-top: 2rem;
    border-radius: 10px;
  }
`;
function WatchGif() {
  return (
    <Watch>
      <h1>Trending Add-Ons</h1>

    <img src={watch} alt="" />
    </Watch>
  );
}
export default WatchGif;
