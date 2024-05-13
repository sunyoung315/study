import { Component } from 'react';
import styled from "@emotion/styled";

const ButtonWrapper = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Props를 통해 전달받을 데이터를 타입스크립트의 interface를 사용하여 정의
// 타입스크립트에서 interface는 객체의 스펙이나 함수의 매개변수, 클래스 등을 정의할 때 사용
// 'readonly': 읽기 전용
// ':'를 쓰면 부모 컴포넌트로부터 필수로 전달받아야 함
// '?:'를 쓰면 선택적으로 전달받을 수 있음
interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

export class Button extends Component<Props> {
  render() {
    const {label, onClick } = this.props;
    return (
      <ButtonWrapper onClick={ onClick }>{ label }</ButtonWrapper>
    )
  }
}