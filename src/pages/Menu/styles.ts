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

export const Content = styled.div`
  width:98vw;
  height:98vh;
  border:8px solid var(--bg-color-2);
  background-color:var(--bg-color-2);

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  flex:1;

  font-size:1rem;

  h4{
    margin-left:auto;
    margin-right:0;

    text-align:right;

    font-family: 'Jura', sans-serif;
    color:var(--content-color);
  }

  @media(max-width:430px){
    h4{
      font-size:0.8rem;
    }
  }
`;

export const TableContainer = styled.div`
  width:100%;
  height:100%;
  background-color:var(--content-color);

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  font-size:1.2rem;
  font-family: 'Jura', sans-serif;

  nav {
    justify-content:center;
    box-shadow:none;
    margin-bottom:0.2rem;
  }

  h2{
    margin-bottom:0.8rem;
  }


  @media(max-width:430px){
    font-size:0.8rem;

    nav {
      width:100%;
      font-size:1.2rem;
    }

  }
`;

export const TableMenu = styled.table`
    animation: ${appearFromBottom} 1s;
    width:100%;
    max-width: 700px;
    padding: 0 0.4rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    tbody{
      width:100%;
      margin-bottom:0.4rem;

      td:last-child{
        border:1px black solid;
        width:100%;
        padding:0 0.2rem;
      }

      td:first-child{
        border:none;
      }

      .title{
        td:first-child{
          text-align:center;
          font-weight:600;
          font-size:1rem;
        }
      }

    }

`;
