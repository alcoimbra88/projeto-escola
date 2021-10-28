import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: ${colors.textDarkColor};
    margin: 0 10px 0;
    font-weight: bold;
  }

  #linkHome {
    margin-left: 30px;
  }
`;
