import Layout from 'components/Layout';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/diary-background.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 50px;
`;

const HeaderTopText = styled.div`
  letter-spacing: 0.18em;
  text-align: center;
`;

export default function Page() {
  return (
    <Layout>
      <Section>
        hello
      </Section>
    </Layout>
  )
}