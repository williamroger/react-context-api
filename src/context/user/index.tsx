import React, { createContext, useState } from 'react';

// Tipando os dados para o usuário
type UserType = {
  name: string;
  lastName: string;
  email: string;
}

// Tipando as props do contextos
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
}

// Valor default do contextos
const DEFAULT_VALUE = {
  state: {
    name: '',
    lastName: '',
    email: '',
  },
  setState: () => { }
}

// Criando o contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e funçnao que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */

type PropsUserContextProvider = {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: PropsUserContextProvider) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;