import { Head } from "../components";
import { container, main, title } from "../styles";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

const Home = () => {
  return (
    <Container className={container}>
      <Head />
      <main className={main}>
        <h1 className={title}>404</h1>
        <p>
          Please return to the main page <a href={"/"}>here</a>.
        </p>
      </main>
    </Container>
  );
};

export default Home;
