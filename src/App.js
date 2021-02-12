import React from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title='Cotizador de seguros' />
      <ContainerForm>
        <Form/>
      </ContainerForm>
    </Container>
  );
}

export default App;
