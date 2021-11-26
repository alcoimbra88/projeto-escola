import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;

  a {
    color: ${colors.textDarkColor};
    margin: 0 10px 0;
    font-weight: bold;
  }

  #linkHome {
    margin-left: 30px;
  }
`;
