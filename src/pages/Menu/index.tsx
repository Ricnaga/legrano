import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SubLayer1, TableFood } from './styles';

const Menu: React.FC = () => (
  <>
    <Container>

      <SubLayer1>
        <TableFood>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              |
              <li><Link to="/menu">Cardápio</Link></li>
            </ul>
          </nav>
          <table>
            <thead>
              <th>Nosso cardápio</th>
            </thead>
            <tbody>
              <tr>
                <td className="pasta">Massas</td>
                <td className="pasta">Preços</td>
              </tr>
              <tr>
                <td className="pasta">Talharim</td>
                <td className="price" rowSpan={2}>R$ 25,00</td>
              </tr>
              <tr>
                <td>
                  Tradicional | beterraba | espinafre
                </td>
              </tr>

              <tr>
                <td className="pasta">Massa p/ lasanha</td>
                <td className="price" rowSpan={2}>R$ 25,00</td>
              </tr>
              <tr>
                <td>
                  Tradicional | espinafre
                </td>
              </tr>

              <tr>
                <td className="pasta">
                  Canelone | Rondelli tradicional
                </td>
                <td className="price" rowSpan={2}>R$ 35,00</td>
              </tr>
              <tr>
                <td>
                  2 queijos | presunto e queijo | espinafre c/ ricota | muçarela com tomate seco
                </td>
              </tr>

              <tr>
                <td className="pasta">
                  Canelone | Rondelli espinafre
                </td>
                <td className="price" rowSpan={2}>R$ 35,00</td>
              </tr>
              <tr>
                <td>
                  2 queijos
                </td>
              </tr>

              <tr>
                <td className="pasta">
                  Ravioli tradicional
                </td>
                <td className="price" rowSpan={2}>R$ 35,00</td>
              </tr>
              <tr>
                <td>
                  2 queijos | presunto e queijo | abóbora c/ parmesão
                </td>
              </tr>

              <tr>
                <td className="pasta">
                  Ravioli espinafre
                </td>
                <td className="price" rowSpan={2}>R$ 35,00</td>
              </tr>
              <tr>
                <td>
                  2 queijos
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="pasta">
                  Nhoque
                </td>
              </tr>
              <tr>
                <td>
                  batata simples
                </td>
                <td className="price">
                  R$ 25.00
                </td>
              </tr>
              <tr>
                <td>
                  de mandioca
                </td>
                <td className="price">
                  R$ 25.00
                </td>
              </tr>

              <tr>
                <td className="pasta">
                  Nhoque c/ recheio de muçarela
                </td>
                <td className="price">
                  R$ 30.00
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr><td>*Outros sabores -sob consulta</td></tr>
            </tfoot>
          </table>

        </TableFood>
        <h4>Retirada no local; para entrega consultar</h4>
      </SubLayer1>

    </Container>
  </>
);

export default Menu;
