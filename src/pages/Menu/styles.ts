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
  width:100vw;
  height:100vh;
  border:8px solid var(--bg-color-1);

  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
`;

export const SubLayer1 = styled.div`
  width:98vw;
  height:98vh;
  border:8px solid var(--bg-color-2);
  background-color:var(--bg-color-2);

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  flex:1;

  font-size:1vw;

  h4{
    margin-left:auto;
    margin-right:0;

    text-align:right;

    font-family: 'Jura', sans-serif;
    color:var(--content-color);
  }
  @media(max-width:430px){
    h4{
      font-size:3.6vw;
    }
  }
`;

export const TableFood = styled.div`
  width:100%;
  height:100%;
  background-color:var(--content-color);

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  font-size:1.2vw;
  font-family: 'Jura', sans-serif;

  nav {
    height: 5vh;

    background-color: var(--content-color);

    display: flex;
    align-items: center;
    justify-content:center;
  }

  nav ul{
    display:flex;
    list-style:none;

    li{
      padding: 0 1vw;

      a{
        text-transform:uppercase;
        text-decoration:none;
        color:#2C3E50;

        transition:color 0.2s, border 0.1s;
        padding:0.5vw 0;

        &:hover{
          color:#B7950B;
          border-bottom:2px solid;
        }
      }
    }
  }

  table{
    animation: ${appearFromBottom} 1s;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    font-weight:500;

    th{
      font-size:1.6vw;
    }

    .pasta{
      text-align:center;
      font-weight:700;
      padding-top:0.5vw;
      border-top:1px solid;
    }

    .price{
      text-align:right;
      border: 1px solid;
      padding:0.1vw;
      width:5vw;

      &:hover{
        height:7vh;
      }
    }

    tfoot{
      margin-left: auto;
      margin-right:0;
    }
  }

  @media(max-width:430px){
    font-size:4vw;

    nav {
      width:100%;
      font-size:4.6vw;
    }

    table{
      th{
        font-size:4vw;
      }
    }

  }
`;
