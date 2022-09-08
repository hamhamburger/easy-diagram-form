
// import styled from 'styled-components';
import styled from '@emotion/styled';
import { Handle } from 'react-flow-renderer';

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