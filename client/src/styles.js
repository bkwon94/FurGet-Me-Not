import styled, { css } from 'styled-components';

export const CatsSection = styled.div`
  background-color: #fff;
  height: 100vh;
`;

export const OtherSection = styled.div`
  background-color: #f9f9f7;
  height: 100vh;
`;


/** NAVBAR STYLES */
export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // justify-content: space-between;
  align-items: center;
  height: 7vh;
  list-style: none;
  z-index: 1;
  background-color: rgb(21, 97, 173);
  padding: 0;
`;

export const NavTitle = styled.li`
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25px;
  font-size: 35px;
  font-weight: 700;
  color: #fc5226;
  // text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white;
`;

export const NavItems = styled.li`
  align-self: flex-end;
  justify-content: flex-end;
  font-size: 20px;
  margin-right: 15px;
  border-bottom: 3px solid transparent;
  padding-bottom: 4px;
  :hover {
    border-bottom: 3px solid #fff;
    transition: 0.5s;
  }
`;

export const NavItemsContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 18%;
  margin-left: auto;
  margin-right: 25px;
`;

export const Favorites = styled.button`
   color: white;
   background-color: transparent;
   border: none;
   font-size: 20px;
   :hover {
     color: red;
   }
`;

export const RegisterButton = styled.button`
  background-color: #1dbab4;
  color: #FFF;
`;


/** HOME HEADER PAGE STYLES */
export const HeadingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 1.5fr 7fr 1fr;
  height: 100vh;
  background-color: #fff;
  text-align: center;
`;

export const MainHeader = styled.h1`
  font-size: 90px;
  margin-top: 2.5vh;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  color: #FFF;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const MainDescription = styled.div`
  font-size: 22.5px;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  line-height: 40px;
  color: #FFF;
`;

export const MainButton = styled.button`
  background-color: #fc5226;
  height: 50px;
  width: 150px;
  border-radius: 50px;
  border: none;
  color: #FFF;
  font-size: 16px;
  margin-top: 3vh;
`;

/** DOG SECTION STYLES */
export const DogsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 4fr 4fr 1fr;
  grid-template-rows: 1fr 3fr 6fr;
  background-color: #f9f9f7;
  height: 100vh;
  // text-align: center;
  font-size: 50px;
`;

export const Form = styled.div`
  width: 500px;
  padding: 30px;
  background: #FFF;
  margin: 0px auto 110px auto;
  box-shadow: 0px 0px 15 px rgba(0, 0, 0, 0.22);

  h2 {
    background: rgb(21, 97, 173);
    text-transform: uppercase;
    text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 white, 0 -0.5px black;
    color: #fff;
    font-size: 20px;
    padding: 20px;
    margin: -30px -30px 30px -30px;
  }
  input {
    outline: none;
    display: block;
    width: 100%;
    padding 7px;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    margin-bottom: 10px;
    height: 45px;
    font-size 18px;
  }
  button {
    box-shadow: inset 0px 1px 0px 0px #fc5226;
    background-color: #fc5226;
    color: #FFF;
    border 1px solid #FFF;
    cursor: pointer;
    font-size: 15px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const DogHeader = styled.h3`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  margin
  font-size: 1.5em;
`;

export const DogThinkingBubble = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  position: relative;
  background: rgb(21, 97, 173);
  border-radius: 0.4em;
  font-size: 18px;
  color: #FFF;
  width: 300px;
  height: 200px;
  margin: 50px auto 0 auto;
  padding: 25px 20px 0 20px;
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: rgb(21, 97, 173);
    border-bottom: 0;
    margin-left: -14px;
    margin-bottom: -14px;
  }
  p {
    float: right;
    margin-top: 15px;
  }
`;

export const DogImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  margin: 0 auto auto auto;
`;

export const DogFormContainer = styled.div`
  grid-column: 3 / 5;
  grid-row: 2 / 4;
  img {
    width: 250px;
    height: 180px;
    display: flex;
    margin: 0 auto;
  }
`;

export const DogDisplayContainer = styled.div`
  height: 80vh;
  overflow: scroll;
  max-width: 90%
  overflow-x: hidden;
  border: 2px solid #FFF;
  // border-radius: 50px;
  background-color: #FFF;
  color: #797979;
  h2 {
    background: rgb(21, 97, 173);
    text-transform: uppercase;
    text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 white, 0 -0.5px black;
    text-align: center;
    color: #fff;
    font-size: 35px;
    padding: 30px 30px 15px 30px;
    margin: -20px -20px 20px -20px;
  }
`;

export const DogInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // align-content: space-between;
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const DogNameAndInfo = styled.div`
  flex-direction: column;
  justify-content: space-between;
  max-width: 45%;
`;

export const DogImage = styled.img`
  width: 190px;
  height: 275px;
  background: transparent;
  padding: 4px;
  border: 1px solid #797979;
`;

export const DogName = styled.h3`
  font-size: 25px;
  text-align: right;
  color: rgb(21, 97, 173)
`;

export const DogDescription = styled.p`
  font-size: 16px;
  text-align: right;
`;

export const DogButton = styled.a`
  font-size: 13px;
  text-decoration: none;
  float: right;
  color: #FFF;
  background-color: #fc5226;
  width: 95px;
  height: 30px;
  padding: 7px 1.5px 0 7px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 4px;
`;

export const FavoriteButton = styled.button`
  border: none;
  color: rgb(21, 97, 173);
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

// FAVORITES
export const FavoritesPage = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-content: center;
  width: 700px;
  h2 {
    background: rgb(21, 97, 173);
    text-transform: uppercase;
    text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 white, 0 -0.5px black;
    color: #fff;
    font-size: 20px;
    padding: 20px;
  }
  h4 {
    color: rgb(21, 97, 173);
  }
`;

export const FavoritesItems = styled.div`
  color: #797979;
  justify-content: space-between;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #fc5226;
    font-weight: bold;
    border-bottom: 4px solid transparent;
    :hover {
      border-bottom: 4px solid #fc5226;
    }
  }
`;

// export { HeadingSection, BasketballSection, SoccerSection, Navbar};