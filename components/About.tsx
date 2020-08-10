import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const LeftColumn = styled.div`
  width: 500px;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 100px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  color: #000000;
  padding-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  padding: 15px;
`;

const RightColumn = styled.div`
  background-image: url("/assets/images/rock-in-a-sand.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export default function Component() {
  return (
    <Section id="about">
      <LeftColumn>
        <Title>What is Self-Distancing?</Title>
        <Paragraph>
          When bad things happen, it is important to understand your feelings
          and thoughts after the event. However, that attempt often backfires,
          leading people to feel worse by reliving a trauma.
        </Paragraph>
        <Paragraph>
          Self-distancing is a research-based method that is proven to be an
          adaptive form of self-reflection (Ayduk & Kross, 2011; Park et al.,
          2016).
        </Paragraph>
        <Paragraph>
          Research shows that when people practice self-distancing, they are
          more likely to take control of their emotions, have less
          inter-personal issues, and also more likely to engage in productive
          problem-solving.
        </Paragraph>
        <Paragraph>
          The good news is that it is easy to learn how to do this. Let's learn
          how to do so.
        </Paragraph>
      </LeftColumn>
      <RightColumn></RightColumn>
    </Section>
  );
}
