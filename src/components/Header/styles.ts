import styled from "styled-components";

export const Container = styled.nav`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  padding: 0 30px;

  color: #fff;
  align-items: center;

  display: flex;
  justify-content: space-between;
`; 
