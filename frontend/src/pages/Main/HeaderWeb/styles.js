import styled from 'styled-components';

export const Container = styled.div`
  max-width: 347px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 100%;
  box-shadow: 0 4px 4px #00000025;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderMenu = styled.header`
  width: 347px;
  height: 76px;
  background: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.linearColors})`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 1px 8px #00000052;
  position: fixed;

  span {
    color: ${(props) => props.theme.thirdTextColor};
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: default;

    img {
      border-radius: 50%;
      height: 36px;
      background-color: #fff;
      margin-right: 17.5px;
      border: 2px solid ${(props) => props.theme.thirdTextColor};
    }
  }
`;

export const NotificationContainer = styled.div`
  padding: 80px 20px 0;
  height: 100%;
  overflow-y: auto;

  p {
    margin: 20px 0;
    font-weight: bold;
    color: ${(props) => props.theme.primaryTextColor};
    font-size: 16px;
  }
`;
