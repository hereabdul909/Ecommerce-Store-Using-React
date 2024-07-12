import styled from "styled-components";
export const Store = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;
  font-size: 1.5rem;
  margin-top: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid lightgray;
  @media (max-width: 1400px) {
  gap: 10rem;
  font-size: 1.3rem;
  }
  @media (max-width: 1000px) {
  gap: 5rem;
  font-size: 1.1rem;
  }
  @media (max-width: 700px) {
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  }
  .right {
    h1 {
      font-weight: 700;
      @media (max-width:350px) {
           font-size:1rem;
      }
    }
    h4 {
      font-weight: 300;
    }
    .input {
      display: flex;
      gap: 1rem;
      @media (max-width: 700px) {
        flex-direction: column;
      }
      input {
        padding: 5px 0;
        width: 100%;
      }
      button {
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
      }
    }
    @media (max-width: 700px) {
      padding: 25px;
      margin: 10px;
    }
  }
  .left {
    h1 {
      font-weight: 700;
      @media (max-width:350px) {
              font-size: 1rem;
       }
    }
    h4 {
      font-weight: 300;
    }
    .app {
      display: flex;
      gap: 1rem;
      @media (max-width: 700px) {
        justify-content: center;
      }
      img {
        width: 100px;
      }
    }
  }
`;
