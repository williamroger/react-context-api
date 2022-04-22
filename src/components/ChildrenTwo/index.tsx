import { useContext, useState } from 'react';

// importando o contexto UserContext
import UserContext from '../../context/user';

import { Container } from './styles';

export const ChildrenTwo = () => {
  const [lastName, setLastName] = useState('');
  const { state, setState } = useContext(UserContext);

  function handleEditLastName() {
    setState({
      ...state,
      lastName: lastName,
    });
  }

  return (
    <Container>
      <h2>Filho 02</h2>
      <strong>eu altero o Sobrenome</strong>
      <input
        type="text"
        placeholder="Novo Sobrenome"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="submit" onClick={handleEditLastName}>Alterar</button>

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