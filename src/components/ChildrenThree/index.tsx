import { useContext, useState } from 'react';

// importando o contexto UserContext
import UserContext from '../../context/user';

import { Container } from './styles';

export const ChildrenThree = () => {
  const [email, setEmail] = useState('');
  const { state, setState } = useContext(UserContext);

  function handleEditEmail() {
    setState({
      ...state,
      email: email,
    });
  }

  return (
    <Container>
      <h2>Filho 02</h2>
      <strong>eu altero o E-mail</strong>
      <input
        type="text"
        placeholder="Novo E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handleEditEmail}>Alterar</button>

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