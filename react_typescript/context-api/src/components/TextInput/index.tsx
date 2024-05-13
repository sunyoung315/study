import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

export const TextInput = ({ value, onChange }: Props) => {
  return (
    <Input value={value} onChange={event => onChange(event.target.value)} />
  );
};
