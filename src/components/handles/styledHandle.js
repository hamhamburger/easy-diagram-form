import styled from 'styled-components';
import { Handle, Position, NodeProps, Connection, Edge, HandleType } from 'react-flow-renderer';

const CustomBottomHandle = styled(Handle)`
&& {
  left: -1px;
  bottom: 0px;
  transform: translateY(0px);
  background: #EF8354;
  border-radius: 0px 0px 10px 10px;
  height: 15px;
  width: calc(100% + 2px);
  &:hover {
    background: #ed956f;
  }
}`;