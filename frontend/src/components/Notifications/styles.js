import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
    border: 2px solid
      ${(props) => (props.theme.title === 'dark' ? '#fff' : 'transparent')};
  }

  span {
    color: ${(props) => props.theme.primaryTextColor};
    line-height: 22px;
  }
`;
