import styled, { css } from 'styled-components';

/** SECTION STYLES */

export const HeadingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 1.5fr 7fr 1fr;
  height: 100vh;
  background-color: #fff;
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

export const NavListItem = styled.a`
  color: white important!;
`;

export const RegisterButton = styled.button`
  background-color: #1dbab4;
  color: #FFF;
`;


/** HOME HEADER PAGE STYLES */
export const MainHeader = styled.h1`
  font-size: 5vw;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
`;

export const MainDescription = styled.p`
  font-size: 1.25vw;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

// export { HeadingSection, BasketballSection, SoccerSection, Navbar};