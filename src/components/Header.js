import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #dbdbdb;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  font-family: "Bagel Fat One", system-ui;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Badge = styled.div`
  font-size: 24px;
  font-weight: 700;
  a {
    background: linear-gradient(
      90deg,
      rgba(255, 106, 227, 1) 0%,
      rgba(135, 163, 255, 1) 51%,
      rgba(58, 215, 65, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Name = styled.div`
  font-size: 24px;
  a {
    color: #007bff;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>PORT FOLIO</Logo>
      <Badge>
        <a
          href="https://www.credly.com/users/jongin-lee.249b9a59"
          target="_blank"
          rel="noreferrer noopener"
        >
          ACP 자격증 뱃지
        </a>
      </Badge>
      <Name>
        <a
          href="https://github.com/jonginhey"
          target="_blank"
          rel="noreferrer noopener"
        >
          LEE JONGIN
        </a>
      </Name>
    </SHeader>
  );
};
