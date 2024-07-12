import styled from "styled-components";
export const FooterSection = styled.footer`
  background-color: black;
  color: white;
  .sb-footer {
    display: flex;
    flex-direction: column;
    .sb-footer-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      padding: 2rem 5rem;
      @media (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
        margin: auto;
        padding: 2rem 2rem;
      }
      @media (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0;
        text-align: center;
        gap: 0;
      }
      img {
        width: 100px;
        @media (max-width: 400px) {
          width: 130px;
        }
      }
      h3 {
        font-family: Georgia, "Times New Roman", Times, serif;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 1rem 0;
        @media (max-width: 400px) {
          font-size: 2rem;
        }
      }
      h4 {
        font-size: 1.2rem;
        @media (max-width: 400px) {
          font-size: 1.5rem;
        }
      }
      p {
        color: white;
        font-weight: 100;
        cursor: pointer;
        @media (max-width: 400px) {
          font-size: 1.4rem;
        }
      }

      .social_media {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        @media (max-width: 400px) {
          justify-content: center;
          font-size: 2rem;
        }
      }
    }
  }
  .copyright {
    text-align: center;
  }
`;
