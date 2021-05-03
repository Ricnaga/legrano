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

export const NavBar = styled.nav`
    height: 5vh;
    width: 100%;


    background-color: var(--content-color);

    display: flex;
    align-items: center;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index:1;

    ul{
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
`;
