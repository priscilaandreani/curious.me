import styled from "styled-components";

export const PageRoom = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.lighter};

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1120px;
    margin: 0 auto;

    > img {
      max-height: 45px;
    }
  }
`

export const PageContent = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    display: flex;
    align-items: center;
    margin: 32px 0 24px;

    span {
      margin-left: 15px;
      padding: 8px 16px;
      border-radius: 50px;
      background-color: ${props => props.theme.colors.primary};
      
      color: ${props => props.theme.colors.white};
      font-weight: 500;
      font-size: 14px;
    }

  }

  form { 
    textarea {
      width: 100%;
      min-height: 130px;
      resize: vertical;

      padding: 14px;
      border: 0;
      border-radius: 8px;
      background-color: ${props => props.theme.colors.white};
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info{
        display: flex;
        align-items: center;

        img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        > span {
          margin-left: 8px;
          color: ${props => props.theme.colors.text};
          font-weight: 500;
          font-size: 14px;
        }
      }

      span { 
        font-size: 14px;
        font-weight: 500;
        color: ${props => props.theme.colors.text};

        button {
          background-color: transparent;
          border: 0;

          color: ${props => props.theme.colors.primary};
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      }

    }
  }
`;