import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
    from{
        opacity:0;
        transform: translateX(50px);
    }to{
        opacity:1;
        transform: translateX(0);
    }
`;

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

  nav {

    height: 5vh;
    width: 100%;

    background-color: var(--content-color);

    display: flex;
    align-items: center;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index:1;

  }
    nav ul{
      display:flex;
      list-style:none;
          animation: ${appearFromRight} 1s;

      li{
        padding: 0 16px;

        a{
          text-transform:uppercase;
          text-decoration:none;
          color:#2C3E50;

          transition:color 0.2s, border 0.1s;
          padding:8px 0;

          &:hover{
            color:#B7950B;
            border-bottom:2px solid;
          }
        }
      }
    }

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
`;

export const Logo = styled.div`
  margin-bottom:16px;
  background-color: var(--content-color);
  border-radius: 50%;

  max-width:500px;
  width:95vw;
  height:28vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: color 0.2s;

  &:hover{
      color:#B7950B;
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

`;
