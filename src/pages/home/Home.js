import styled from "styled-components";
import { portfolioList } from "../../components/portfolioList";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #f7f9fc;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 15px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Con = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    object-fit: cover;
    height: 600px;
    border-radius: 10px;
  }

  @media (max-width: 945px) {
    a {
      width: 200px;
    }

    img {
      height: 400px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    a {
      width: 100%;
    }

    img {
      height: 350px;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.div`
  max-width: 500px;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  margin: 0 20px;

  p {
    margin-top: 10px;
  }

  a {
    color: #007bff;
    font-weight: 500;

    &:hover {
      color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    margin: 0;

    p {
      word-break: break-all;
    }
  }
`;

const Desc = styled.p`
  white-space: pre-line;
  margin-bottom: 50px;
  font-weight: 600;
  opacity: 0.8;
`;

export const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return (
    <Container>
      <Box>
        {portfolioList.map((data, index) => (
          <Con key={index}>
            <Link to={data.site_url} target="_blank">
              <img src={data.img} alt={data.alt}></img>
            </Link>
            <Text>
              <Title>{data.title}</Title>
              <Desc>{data.desc}</Desc>
              <p>
                깃허브 주소 :{" "}
                <Link to={data.git_url} target="_blank">
                  {data.git_url}
                </Link>
              </p>
              <p>
                사이트 주소 :{" "}
                <Link to={data.site_url} target="_blank">
                  {data.site_url}
                </Link>
              </p>
            </Text>
          </Con>
        ))}
      </Box>
    </Container>
  );
};
