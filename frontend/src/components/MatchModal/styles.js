import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 99999;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15px;

  #match-icon {
    margin-bottom: 35px;
  }

  p {
    font-size: 25px;
    color: #fff;
    text-align: center;
    margin: 0 0 27px;
  }

  button {
    color: #fff;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    #match-icon {
      height: 70px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const Profile = styled.img`
  height: 201px;
  margin: 0 0 27px;
  border: 4px solid #fff;
  border-radius: 50%;
  background-color: #fff;
`;

export const Link = styled.a`
  text-decoration: none;
  background: linear-gradient(0.25turn, #ff0569, #ff3d44, #ff613b);

  max-width: 302px;
  width: 100%;
  padding: 22px 0;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 27px;
`;
