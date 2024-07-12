import styled from "styled-components";
export const Mens = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    border-bottom: 4px solid orange;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (max-width: 700px) {
      margin-top: 1rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;
export const MenCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 90%;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 350px) {
    width: 100%;
  }
  .box {
    border: 3px solid lightgray;
    border-radius: 5px;
    position: relative;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
    @media (max-width: 700px) {
      width: 80%;
      margin: auto;
    }
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    &:hover .btn {
      top: 0;
      opacity: 1;
    }
    img {
      width: 100%;
      border-radius: 5px;
      border-bottom: 2px solid lightgray;
    }
    p {
      padding-left: 5px;
      span {
        text-decoration: line-through;
        color: #bbb4b4;
      }
    }
    .btn {
      padding: 5px 0 5px 0;
      background-color: #1395c584;
      border-radius: 5px;
      position: absolute;
      top: -10px;
      transition: top 0.3s ease;
      opacity: 0;
      width: 100%;
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: 800;
      color: white;
      cursor: pointer;
      .icon {
        padding: 10px;
      }
    }
  }
`;
