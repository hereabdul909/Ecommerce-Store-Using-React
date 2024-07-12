import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f8ff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    .bars {
      padding: 1rem 1rem 1rem 2rem;
      font-size: 1.3rem;
      display: none;
      @media (max-width: 700px) {
        display: block;
        padding-left: 1rem;
      }
      @media (max-width: 350px) {
        padding-left: 0.5rem;
      }
    }
    .logo {
      padding-left: 1rem;
      @media (max-width: 410px) {
        padding-left: 0;
      }
      img {
        width: 150px;
        cursor: pointer;
        @media (max-width: 410px) {
          width: 100px;
        }
      }
    }
    ul {
      display: flex;
      list-style: none;
      @media (max-width: 700px) {
        flex-direction: column;
        position: absolute;
        top: 0;
        left: -100%;
        margin-top: 4.4rem;
        background-color: #e1f3e1;
        height: 100vh;
        width: 50%;
        transition: all 0.4s ease;
        z-index: 1;
      }
      .left_menu {
        position: absolute;
        font-size: 1.4rem;
        right: 0;
        margin-right: 10px;
        margin-top: 10px;
        display: none;
        @media (max-width: 700px) {
          display: block;
          font-size: 1.7rem;
        }
      }
      li {
        padding: 0.5rem;
        margin-left: 1rem;
        @media (max-width: 700px) {
          margin-top: 3rem;
        }
        a {
          text-decoration: none;
          color: black;
          font-weight: 700;
          transition: all 400ms ease;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

          &:hover {
            color: royalblue;
          }
          @media (max-width: 700px) {
            font-size: 1.5rem;
            border-bottom: 1px solid black;
            font-family: cursive;
          }
        }
      }
    }
    .find {
      display: flex;
      align-items: center;
      border: 2px solid black;
      border-radius: 5px;
      border-color: royalblue;
      width: 400px;
      margin-left: 1rem;
      @media (max-width: 1150px) {
        display: none;
      }
      input {
        border: none;
        outline: none;
        background: none;
      }
      .search {
        background-color: royalblue;
        color: white;
        padding: 0.4rem;
        cursor: pointer;
      }
    }
  }
`;
export const Icon = styled.div`
  padding: 2rem;
  display: flex;
  @media (max-width: 350px) {
    padding: 0.2rem;
  }
  .icon {
    margin: 0.3rem;
    font-size: 1.3rem;
    color: black;
    cursor: pointer;
    position: relative;
    @media (max-width: 350px) {
      margin-right: 1rem;
    }
  }
  span {
    width: 15px;
    height: 12px;
    border-radius: 50%;
    font-size: 11px;
    background-color: red;
    position: absolute;
    right: 27px;
    top: 20px;
    text-align: center;
    padding-bottom: 3px;
    color: aliceblue;
    @media (max-width: 350px) {
      right: 10px;
    }
  }
`;
