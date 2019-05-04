import styled, { css } from 'styled-components';

export const HeadingSection = styled.div`
  background-color: black;
  height: 100vh;
`;

export const BasketballSection = styled.div`
  background-color: white;
  height: 100vh;
`;

export const HockeySection = styled.div`
  background-color: blue;
  height: 100vh;
`;

export const SoccerSection = styled.div`
  background-color: black;
  height: 100vh;
`;

export const Navbar = styled.a`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  height: 7.5vh;
  list-style: none;
`;


// export { HeadingSection, BasketballSection, SoccerSection, Navbar};