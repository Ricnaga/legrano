import React from 'react';
import { Nav } from '../../components/Nav';
import {
  Container, Content, TableContainer, TableMenu,
} from './styles';
import { allDishes } from './Alldishes';

export default function Menu() {
  return (
    <Container>

      <Content>
        <TableContainer>
          <Nav />

          <h2>Nosso cardápio</h2>
          <TableMenu>

            {allDishes.map(
              (dishes) => (
                <tbody key={dishes.title}>
                  <tr className="title">
                    <td>{dishes.title}</td>
                    <td rowSpan={2}>
                      {dishes.value}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {dishes.description}
                    </td>
                  </tr>
                </tbody>
              ),
            )}
          </TableMenu>

        </TableContainer>
        <h4>Retirada no local; para entrega consultar</h4>
      </Content>

    </Container>
  );
}
