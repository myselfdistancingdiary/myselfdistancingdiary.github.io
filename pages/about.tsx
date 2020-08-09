import Layout from "components/Layout";
import styled from "styled-components";

const SectionOne = styled.section`
  height: 891px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const LeftColumn = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-style: normal;
  font-family: lulo-clean-w01-one-bold, sans-seif;
  color: #000000;
`;

const RightColumn = styled.div`
  background-image: url('/assets/images/rock-in-a-sand.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const SectionTwo = styled.section`
  background-image: url('/assets/images/mountains.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 891px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Page() {
  return (
    <Layout>
      <SectionOne>
        <LeftColumn>
          <Title>What is Self-Distancing?</Title>
          <p>
            When bad things happen, it is important to understand your feelings
            and thoughts after the event. However, that attempt often backfires,
            leading people to feel worse by reliving a trauma.
          </p>
          <p>
            Self-distancing is a research-based method that is proven to be an
            adaptive form of self-reflection (Ayduk & Kross, 2011; Park et al.,
            2016).
          </p>
          <p>
            Research shows that when people practice self-distancing, they are
            more likely to take control of their emotions, have less
            inter-personal issues, and also more likely to engage in productive
            problem-solving.
          </p>
          <p>
            The good news is that it is easy to learn how to do this. Let's
            learn how to do so.
          </p>
        </LeftColumn>
        <RightColumn>


        </RightColumn>
      </SectionOne>
      <SectionTwo>

      </SectionTwo>
    </Layout>
  );
}
