import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 14px;

  > .swipe {
    position: absolute;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.48);
    border-radius: 8px;
    max-height: 500px;
    height: 100%;
    cursor: pointer;

    + .swipe {
      box-shadow: none;
    }
  }

  > p {
    color: ${(props) => props.theme.secondaryTextColor};
    letter-spacing: 0.03em;
  }

  @media (max-width: 768px) {
    .swipe {
      left: 10px;
      right: 10px;
      top: 45px;
      max-height: calc(100% - 30px - 30px);
      height: 100%;
    }
  }
`;

export const EndUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
    border-width: 5px;
    border-style: solid;
    background-color: #fff;
    border-color: ${(props) => props.theme.linearColors[1]};
  }

  p {
    color: ${(props) => props.theme.secondaryTextColor};
  }

  @media (max-width: 768px) {
    margin-top: 30vh;

    img {
      height: 84px;
      border-width: 3px;
    }
  }
`;
