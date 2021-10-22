import styled from 'styled-components';

export const ModalStyle = styled.div`
  width: 600px;
  height: 300px;

  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 100px;

    img {
      width: 64px;
      margin-bottom: 32px;
    }

    h2 {
      color: ${(props) => props.theme.colors.text};
      text-align: center;
      margin-bottom: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
