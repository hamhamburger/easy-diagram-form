// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import { Handle, Position, NodeProps, Connection, Edge, HandleType } from 'react-flow-renderer';

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

