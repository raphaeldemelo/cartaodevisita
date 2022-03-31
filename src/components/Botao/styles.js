import styled from 'styled-components';

export const Container = styled.button`
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  border-radius: 50px;
  outline: none;
  transition: 1s ease-in-out;
  

  :hover {
  transition: 0.25s ease-in-out;
  background: #4F95DA;
  color: #FFF;
}
`;