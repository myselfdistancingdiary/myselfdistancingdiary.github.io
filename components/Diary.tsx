import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Section = styled.section`
  background-image: url("/assets/images/writing-letters.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  text-align: center;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 40px;
  padding-top: 40px;
`;

export default function Component() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    const diaryString = data.diary;
    const diaryWords = diaryString.split(" ");
    const firstPersonWords = ["i", "i'm", "my", "me", "mine", "mine.", "me."];

    for (const firstPersonWord of firstPersonWords) {
      console.log(`loop for word ${firstPersonWord}`);
      for (const diaryWord of diaryWords) {
        if (diaryWord.toLowerCase() === firstPersonWord) {
          alert(`the word ${diaryWord} is included!`);
        }
      }
    }
    return console.log(data);
  }

  return (
    <Section>
        <Heading>My Self-Distancing Diary</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea name="diary" ref={register} rows={40} cols={100}>
        </textarea>
        <br />
        <input type="submit" />
      </form>
    </Section>
  );
}
