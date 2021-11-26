import styled from 'styled-components';

import * as colors from '../../config/colors';

export const FirstContainer = styled.div`
  height: 100vh;
`;

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 15vh;
  width: 100%;
`;

export const SecondContainer = styled.div`
  height: 100vh;
  background-color: ${colors.primaryDarkColor};
`;

export const AboutUs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25vh;

  #containterAboutUs {
    display: flex;
    align-items: center;
  }

  #titleAboutUs {
    margin-bottom: 30px;
  }

  #textAboutUs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.5%;
    margin-right: 30vw;
    color: black;
    background-color: white;
    width: 50vh;
    height: 50vh;
    border-radius: 40px;
    box-shadow: 0px 0px 10px grey;
  }

  p {
    text-align: justify;
    font-size: 100%;
  }
`;

export const ThirdContainer = styled.div`
  height: 100vh;
`;

export const Metodology = styled.div`
  #metodContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #textMetod {
    margin-top: 15vh;
    margin-bottom: 10vh;
    width: 30%;
    text-align: center;
  }

  p {
    text-align: justify;
  }

  #titleMetod {
    margin-bottom: 8vh;
  }
`;
