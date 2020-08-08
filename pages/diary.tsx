import Layout from 'components/oldLayout';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/diary-background.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;

`

export default function Page() {
    return (
      <Layout>
        <Section>
          Diary
        </Section>
      </Layout>
    )
  }