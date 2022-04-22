import { useContext, useState } from 'react';

// nosso único contexto criado que será usado junto com o hook useContext
import UserContext from '../../context/user';

// componentes do styled-component
import { Container, ParentComponent, Form } from './styles';

// importando os filhos que irão compor a página e interagir também com o contexto
import { ChildrenOne } from '../../components/ChildrenOne';
import { ChildrenTwo } from '../../components/ChildrenTwo';
import { ChildrenThree } from '../../components/ChildrenThree';

const FormData = () => {
  // estados criados para armazenar o conteúdo digitado nos inputs
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // usando o useContext para capturar as priopriedades do UserContext
  const { setState: setGlobalState } = useContext(UserContext);

  function handleSubmit() {
    setGlobalState({
      name,
      lastName,
      email
    });
  }

  return (
    <Container>
      <ParentComponent>
        <Form>
          <h2>Inserir Dados</h2>

          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>Pronto</button>
        </Form>

        <h1>Componente Pai</h1>

        <div id="childrens">
          <ChildrenOne />
          <ChildrenTwo />
          <ChildrenThree />
        </div>
      </ParentComponent>
    </Container>
  );
};

export default FormData;