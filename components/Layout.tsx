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
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px 50px;
  padding: 50px;
  font-weight: bold;
`;

const MenuItem = styled.a`
  font-size: 15px;
  cursor: pointer;
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
          <div>

          </div>
          <Link href="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/#about">
            <MenuItem>About</MenuItem>
          </Link>
          <Link href="/diary">
            <MenuItem>Diary</MenuItem>
          </Link>
        </Header>
        <Main>{children}</Main>
      </Container>
    </>
  );
}
