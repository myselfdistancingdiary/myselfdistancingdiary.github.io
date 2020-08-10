import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/mountains.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 950px;
  background-position: 0px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  padding-top: 100px;
`;

const TextSection = styled.div`
  text-align: center;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const SubHeading = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin: 10px;
  text-align: justify;
`;

const StepHeader = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export default function Component() {
  return (
    <Section>
      <div></div>
      <TextSection>
        <Heading>How to do self-distancing</Heading>
        <SubHeading>Be a fly on the wall</SubHeading>
        <StepHeader>Step 1. Recall the Event</StepHeader>
        <Paragraph>
          First, you would need to recall a stressful event that impacted you in
          your mind. It can be about a sad, angry, or frustrating event. Maybe
          you might have a hard time labeling your own emotion right now. That's
          okay. What would the be an event you would like to revisit?
        </Paragraph>
        <StepHeader>Step 2. Take a step back</StepHeader>

        <Paragraph>
          Now, take a few steps back, move away from the situation to a point
          where you can watch the event from a distance as if you were a fly on
          the wall
        </Paragraph>
        <StepHeader>Step 3. Now You are ready to write!</StepHeader>

        <Paragraph>
          Don't forget! You are not "you". You are an observer, a fly on the
          wall.
        </Paragraph>
        <Paragraph>
          Please recall the event <b>using a third-person voice</b> to understand what
          happened to your distant self and the reasons underlying the emotions
          of the distant you.
        </Paragraph>

        <Paragraph>
          Rather than using "I", "My", "Me", "Mine", you will be using your own
          name or your pronouns (i.e., a third-person voice) to describe the
          event.
        </Paragraph>
      </TextSection>
      <div></div>
    </Section>
  );
}
