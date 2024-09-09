import styled from "styled-components";
import { portfolioList } from "../../components/portfolioList";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 25px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div`
  border: 1px solid #888;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 10px;
    height: 600px;
    object-fit: contain;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.div`
  max-width: 500px;
  font-size: 18px;
  font-weight: 400;
  flex-direction: column;
  margin-right: 10px;

  h2 {
    margin-bottom: 10px;
  }

  a {
    font-weight: 500;

    &:hover {
      color: blue;
    }
  }
`;

export const Home = () => {
  return (
    <Container>
      <Box>
        {portfolioList.map((data) => (
          <Con>
            <Link to={data.site_url} target="_blank">
              <img src={data.img} alt={data.alt}></img>
            </Link>
            <Text>
              <Title>{data.title}</Title>
              <h2>
                깃허브 주소 :{" "}
                <Link to={data.git_url} target="_blank">
                  {data.git_url}
                </Link>
              </h2>
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
