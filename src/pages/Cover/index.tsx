import React from 'react';
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import Logo from '../../assets/legrano.png';
import {
  Container,
  HeaderLogo,
  Content,
  Contacts,
} from './styles';

const Cover: React.FC = () => (
  <>
    <Container>
      <HeaderLogo>
        <img src={Logo} alt="logo" />
      </HeaderLogo>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          |
          <li><Link to="/menu">Cardápio</Link></li>

        </ul>

      </nav>

      <Content>

        <Contacts>
          <a href="https://api.whatsapp.com/send?phone=11910371645">
            <SiWhatsapp />
            (11) 91037-1645
          </a>
          <a href="https://www.instagram.com/legrano_">
            <SiInstagram />
            @legrano_
          </a>
          <a href="https://pt-br.facebook.com/legrano.culinariaartesanal">
            <SiFacebook />
            /legrano.culinariaartesanal
          </a>
        </Contacts>
      </Content>
      <footer>Aceitamos cartões de débito</footer>
    </Container>
  </>
);

export default Cover;
