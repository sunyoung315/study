import logo from './logo.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// 1. 이 부분에서만 쓰이는 애니메이션일 경우
// const AppLogo = styled.img`
//   height: 40vmin;
//   pointer-events: none;

//   @media (prefers-reduced-motion: no-preference) {
//    animation: App-logo-spin infinite 20s linear;
//   }

//   @keyframes App-logo-spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;

// 2. 여러 곳에서 사용하는 애니메이션일 경우
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
   animation: ${spinAnimation} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </Header>
    </Container>
  );
}

export default App;
