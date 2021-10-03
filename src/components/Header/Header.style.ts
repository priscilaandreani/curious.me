import styled from "styled-components";

export const Container = styled.nav`
  height: 60px;
  background-color: transparent;
  padding: 0 30px;

  color: ${props => props.theme.colors.text};
  align-items: center;

  display: flex;
  justify-content: space-between;
`; 
