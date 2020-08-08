import Layout from 'components/Layout';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/diary-background.jpg');

`

export default function Page() {
  return (
    <Layout>
      <Section>
        hello
      </Section>
    </Layout>
  )
}