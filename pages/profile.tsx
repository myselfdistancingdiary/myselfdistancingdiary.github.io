import Layout from 'components/Layout';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/diary-background.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size:auto;

`

export default function Page() {
    return (
      <Layout>
        <Section>
          Profile
        </Section>
      </Layout>
    )
  }