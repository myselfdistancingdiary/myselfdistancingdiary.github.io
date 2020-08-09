import Layout from "components/Layout";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/diary-background.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 50px;
  text-align: center;
`;

const HeadingTop = styled.h3`
  font-size: 17px;
  font-weight: bold;
`;

const Heading = styled.h2`
  padding: 20px;
  font-size: 51px;
  font-weight: bold;
`;

const SubHeading = styled.h3`
  font-size: 16px;
`;

export default function Page() {
  return (
    <Layout>
      <Section>
        <HeadingTop>BE A FLY ON THE WALL</HeadingTop>
        <Heading>SELF-DISTANCING DIARY</Heading>
        <SubHeading>
          Best way to take control of your thoughts and feelings
        </SubHeading>
      </Section>
    </Layout>
  );
}
