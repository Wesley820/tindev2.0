import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
`;

export const Content = styled.div`
  width: 100%;
  padding: 12px 20px;
  background-color: ${(props) => props.theme.secondaryColor};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      cursor: pointer;
      height: 24px;

      svg {
        width: 24px;
        height: 24px;
        color: ${(props) => props.theme.primaryTextColor};
      }
    }
  }
`;

export const Option = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    color: ${(props) => props.theme.primaryTextColor};
  }
`;
