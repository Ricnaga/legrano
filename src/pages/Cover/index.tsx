import React from 'react';
import {
  SiFacebook, SiInstagram, SiWhatsapp,
} from 'react-icons/si';
import Logo from '../../assets/legrano.png';
import { Nav } from '../../components/Nav';
import {
  Contacts, Container,
  Content, HeaderLogo,
} from './styles';

export default function Cover() {
  return (
    <>
      <Container>
        <HeaderLogo>
          <img src={Logo} alt="logo" />
        </HeaderLogo>
        <Nav />

        <Content>

          <Contacts>
            <a href="https://api.whatsapp.com/send?phone=5511910371645">
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
}
