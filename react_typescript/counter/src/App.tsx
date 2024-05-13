import { useState } from 'react';
import styled from '@emotion/styled';
// 특정 파일 명을 지정하지 않으면 기본적으로 index.tsx 파일을 찾음!
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title =styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  }

  const add = () => {
    setCounter(counter + 1);
  }

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={ sub }/>
        <Label data={ counter }/>
        <Button label="+" onClick={ add } />
      </Contents>
    </Container>
  );
}

export default App;
