import * as types from '../types';

const initialState = {
  botaoCliclado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoCliclado = !newState.botaoCliclado;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }

    default: {
      return state;
    }
  }
};
