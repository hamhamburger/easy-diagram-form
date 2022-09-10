import styled from '@emotion/styled';
import { Handle } from 'react-flow-renderer';

const BottomHandle = styled(Handle)`
&& {
  left: -1px;
  bottom: 0px;
  transform: translateY(0px);
  background: skyblue;
  border-radius: 0px 0px 10px 10px;
  height: 20px;
  width: calc(100% + 2px);
  &:hover {
    background: steelblue;
  }
}`;

export default BottomHandle

