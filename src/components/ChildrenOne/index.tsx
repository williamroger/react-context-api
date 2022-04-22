import { useContext, useState } from 'react';

// importando o contexto UserContext
import UserContext from '../../context/user';

import { Container } from './styles';

export const ChildrenOne = () => {
  const [name, setName] = useState('');
  const { state, setState } = useContext(UserContext);

  function handleEditName() {
    setState({
      ...state,
      name: name,
    });
  }

  return (
    <Container>
      <h2>Filho 01</h2>
      <strong>eu altero o Nome</strong>
      <input
        type="text"
        placeholder="Novo Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={handleEditName}>Alterar</button>

      <div>
        <span>
          Nome: <strong>{state.name}</strong>
        </span>
        <span>
          Sobrenome: <strong>{state.lastName}</strong>
        </span>
        <span>
          Email: <strong>{state.email}</strong>
        </span>
      </div>
    </Container>
  );
}