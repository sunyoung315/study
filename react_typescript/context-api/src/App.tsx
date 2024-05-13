import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { DataView } from './components/DataView';
import { TextInput } from './components/TextInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책읽기',
  ]);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter(item => item !== todo));
  };

  const [toDo, setToDo] = useState('');

  const onAdd = () => {
    if (toDo === '') return;

    setToDoList([...toDoList, toDo]);
    setToDo('');
  };

  return (
    <Container>
      <Title label="할 일 목록" />
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304FFE" onClick={onAdd} />
    </Container>
  );
}

export default App;
