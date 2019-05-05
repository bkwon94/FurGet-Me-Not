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
  justify-content: space-around;
  height: 6.5vh;
  list-style: none;
  z-index: 1;
  background-color: rgb(21, 97, 173)
`;

export const NavTitle = styled.li`
  font-size: 30px;
  font-weight: 700;
  color: #fc5226;
  // text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white;
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
  background-color: #1dbab4;
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
  grid-template-rows: 1fr 1fr 8fr;
  background-color: #f9f9f7;
  height: 100vh;
  // text-align: center;
  font-size: 50px;
`;

export const DogHeader = styled.h3`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  margin
  font-size: 1.5em;
`;

export const DogFormContainer = styled.div`
  grid-column: 3 / 5;
  grid-row: 2 / 4;
`;

export const DogDisplayContainer = styled.div`
  height: 80vh;
  overflow: scroll;
  max-width: 100%
  overflow-x: hidden;
`;

export const DogInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  margin-bottom: 20px;
`;

export const DogNameAndInfo = styled.div`
  flex-direction: column;
  max-width: 45%;
`;

export const DogImage = styled.img`
  width: 200px;
  height: 275px;
`;

export const DogName = styled.h3`
  font-size: 25px;
  text-align: right;
`;

export const DogDescription = styled.p`
  font-size: 16px;
  text-align: right;
`;

export const DogButton = styled.a`
  font-size: 16px;
  appearance: button;
  text-decoration: none;
  float: right;
`;

// export { HeadingSection, BasketballSection, SoccerSection, Navbar};