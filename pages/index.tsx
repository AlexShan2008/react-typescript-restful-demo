import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to{" "}
          <a href="https://nextjs.org">React TypeScript RESTful demo!</a>
        </Title>

        <Cards />
      </Main>
    </Container>
  );
}