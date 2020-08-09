import Layout from 'components/Layout'
import { useFetchUser } from 'lib/user'
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/assets/images/diary-background.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 50px;
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