import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1120px;

  img {
    width: 60%;
  }

  .info {
    display: block;
    margin-left: -150px;
    margin-top: 150px;

    a {
      display: block;
      padding-top: 16px;
      color: ${(props) => props.theme.colors.highlight};
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
