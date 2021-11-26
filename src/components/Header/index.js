import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.auth.user.nome);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };

  return (
    <Nav>
      {isLoggedIn ? <span>Bem vindo {userEmail} ! </span> : <span />}

      <Link id="linkHome" to="/">
        <a href=" ">Home</a>
      </Link>

      {isLoggedIn ? (
        <Link to="/alunos">
          <span> Lista de Alunos </span>
        </Link>
      ) : (
        <Link to="/login">
          <span> Lista de Alunos </span>
        </Link>
      )}
      <Link to="/register">
        <span> Cadastro de Usuarios</span>
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <span>Logout</span>
        </Link>
      ) : (
        <Link to="/login">
          <span>Login</span>
        </Link>
      )}
    </Nav>
  );
}
