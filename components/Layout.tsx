import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
`;
const Header = styled.header`
  grid-area: header;
  height: auto;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 50px 50px 50px 50px;
  padding: 50px;
`;

const Main = styled.main`
  grid-area: main;
`;

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Container>
        <Header>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/diary">
            <a>Diary</a>
          </Link>
        </Header>
        <Main>{children}</Main>
      </Container>
    </>
  );
}
