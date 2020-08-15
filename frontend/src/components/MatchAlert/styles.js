import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  margin: ${(props) => props.margin || 0};

  span {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    line-height: 32px;
    letter-spacing: 0;
    color: ${(props) => props.theme.primaryTextColor};
  }

  p {
    text-align: center;
    margin-top: 7px;
    font-size: 16px;
    color: ${(props) => props.theme.secondaryTextColor};
    line-height: 23px;
  }
`;

export const Card = styled.div`
  width: 117px;
  height: 170px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  background: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.linearColors})`};
  margin-bottom: 22px;
`;
