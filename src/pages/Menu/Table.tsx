import React from 'react';
import { allDishes } from './Alldishes';
import { TableMenu } from './styles';

export function Table() {
  return (
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
  );
}
