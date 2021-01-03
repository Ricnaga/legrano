import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --bg-color-1: #A0C097;
  --bg-color-2: #01661A;
  --content-color:#EAECEE;
}

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

body{
  background-color:var(--bg-color-1);
}
`;
