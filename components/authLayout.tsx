import Head from 'next/head'
import Header from 'components/header'
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 126px 1fr;
  grid-template-areas:
  "header"
  "main";
  height: 100vh;
`;

const StyledHeader = styled.header`
  grid-area: header;
  height: auto;
  width: 100%;
  position: relative;
  display: grid;
`;

const Main = styled.main`
  grid-area: main;
`


function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>My Self-Distancing Diary</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Layout