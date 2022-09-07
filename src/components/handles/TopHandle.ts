// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import { Handle, Position, NodeProps, Connection, Edge, HandleType } from 'react-flow-renderer';

const TopHandle = styled(Handle)`
&& {
  left: -1px;
  bottom: 0px;
  transform: translateY(0px);
  background: pink;
  border-radius: 10px 10px 0px 0px;
  height: 20px;
  width: calc(100% + 2px);
  z-index:70;
  &:hover {
    background: #e77d8f;
  }
}`;

export default TopHandle