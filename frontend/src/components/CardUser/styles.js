import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
      transparent,
      transparent,
      rgba(0, 0, 0, 0.6)
    ),
    url(${(props) => props.src}), linear-gradient(#fff, #eee, #ccc);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 100%;
  border-radius: 8px;

  footer h2 {
    color: ${(props) => props.theme.thirdTextColor};
    margin-bottom: 12px;
    font-size: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  footer p {
    color: ${(props) => props.theme.thirdTextColor};
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0.03em;
  }

  @media screen and (max-width: 768px) {
    left: 10px;
    right: 10px;
    width: auto;
    height: 100%;
  }
`;
