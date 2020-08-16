import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Profile = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid ${(props) => props.theme.linearColors[1]};
`;

export const Button = styled.button`
  background: none;
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
    color: ${(props) => props.theme.primaryTextColor};
  }
`;
