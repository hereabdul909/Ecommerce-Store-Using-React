import styled from "styled-components";
export const SliderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  .prev,
  .next {
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
export const Slider = styled.div`
  display: flex;
  overflow: hidden;
  transition: transform 0.5s ease;
`;
export const Slide = styled.div`
  width: 100%;
  img {
    width: 1900px;
    @media (max-width: 1700px) {
      width: 1600px;
    }
    @media (max-width: 1400px) {
      width: 1300px;
    }
    @media (max-width: 1200px) {
      width: 1100px;
    }
    @media (max-width: 1000px) {
      width: 900px;
    }
    @media (max-width: 700px) {
      width: 700px;
    }
    @media (max-width: 450px) {
      width: 400px;
    }
    @media (max-width: 300px) {
      width: 300px;
    }
  }
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "blue" : "gray")};
  margin: 0 5px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 7px;
    height: 7px;
    margin: 0 3px;
  }
`;
