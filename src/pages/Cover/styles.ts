import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
    from{
        opacity:0;
        transform: translateY(50px);
    }to{
        opacity:1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  font-family: 'Jura', sans-serif;

  footer{

    width:100vw;
    height:4vh;

    background-color:var(--bg-color-2);
    text-align:right;
    font-size:12px;

    color:var(--content-color);

    padding:0 18px;

  }

`;

export const HeaderLogo = styled.div`
  animation: ${appearFromBottom} 1s;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: 'Alex Brush', cursive;
    font-size: 58px;
    font-weight: 100;
  }

  h2 {
    font-size: 18px;
    text-transform: uppercase;
  }

  img{
    margin-bottom:8px;
    max-width:430px;

    width:90vw;
    height:28vh;
  }

`;

export const Content = styled.div`
  width: 100vw;
  height: 56vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--bg-color-2);

`;

export const Contacts = styled.div`
  animation: ${appearFromBottom} 1s;
  display:flex;
  flex-direction:column;
  justify-content:center;

  a{
    margin:8px 6px;

    color:var(--content-color);
    text-decoration:none;

    font-size:22px;

    svg{
      margin:0 8px;
      color:wheat;
    }

    transition: color 0.2s;

    &:hover{
      color:#B7950B;
    }
  }

  @media(max-width:350px){
    a{
      font-size:1.2rem;
    }
  }

`;
