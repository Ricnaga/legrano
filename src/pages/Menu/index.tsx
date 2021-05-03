import React from 'react';
import { Nav } from '../../components/Nav';
import { Container, Content, TableContainer } from './styles';
import { Table } from './Table';

export default function Menu() {
  return (
    <Container>

      <Content>
        <TableContainer>
          <Nav />

          <h2>Nosso cardápio</h2>
          <Table />

        </TableContainer>
        <h4>Retirada no local; para entrega consultar</h4>
      </Content>

    </Container>
  );
}
