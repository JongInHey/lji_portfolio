import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background: #dbdbdb;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  font-family: "Bagel Fat One", system-ui;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  a {
    color: #007bff;
    font-weight: 500;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>PORT FOLIO</Logo>
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
