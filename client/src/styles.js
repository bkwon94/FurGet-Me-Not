import styled, { css } from 'styled-components';

/** SECTION STYLES */

export const HeadingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 1.5fr 7fr 1fr;
  height: 100vh;
  background-color: #fff;
  text-align: center;
`;

export const DogsSection = styled.div`
  background-color: #f9f9f7;
  height: 100vh;
`;

export const SectionHeader = styled.h3`
  font-size: 1.5em;
`;

export const CatsSection = styled.div`
  background-color: #fff;
  height: 100vh;
`;

export const OtherSection = styled.div`
  background-color: #f9f9f7;
  height: 100vh;
`;


/** HOME HEADER PAGE STYLES */
export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  height: 7.5vh;
  list-style: none;
  z-index: 3;
  background-color: rgb(21, 97, 173)
`;

export const NavTitle = styled.a`
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
export const MainHeader = styled.h1`
  font-size: 90px;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  color: #FFF;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const MainDescription = styled.p`
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

// export { HeadingSection, BasketballSection, SoccerSection, Navbar};