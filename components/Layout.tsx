import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 126px 1fr;
  grid-template-areas:
  "header"
  "main";
  height: 100vh;
`
const Header = styled.header`
  grid-area: header;
  height: auto;
  width: 100%;
  position: relative;
  display: grid;
`

const Main = styled.main`
  grid-area: main;
  padding: 15px;
`

type Props = {
  children?: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            
          </ul>
        </nav>
      </Header>
      <Main>
      {children}
      </Main>
    </Container>
  )
}

