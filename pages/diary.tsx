import Layout from 'components/authLayout';
import styled from 'styled-components';
import { useFetchUser } from 'lib/user'
import { useForm } from "react-hook-form";


const Section = styled.section`
  background-image: url('/diary-background.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;

`

export default function Page() {
  const { user, loading } = useFetchUser()
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const diaryString = data.diary;
    const diaryWords = diaryString.split(' ');
    const firstPersonWords = ["i", "i'm", "my", "me", "mine", "mine.","me."];
    
    for (const firstPersonWord of firstPersonWords) {
      console.log(`loop for word ${firstPersonWord}`)
      for (const diaryWord of diaryWords) {
        if (diaryWord.toLowerCase() === firstPersonWord) {
          alert(`the word ${diaryWord} is included!`);
        }
      }
    }
    return console.log(data);
  }

    return (
      <Layout user={user} loading={loading}>
      <Section>
      <form onSubmit={handleSubmit(onSubmit)}>

      <textarea name="diary" ref={register} rows={20} cols={40}> write your diary </textarea>
      <input type="submit" />
    </form>
        </Section>
      </Layout>
    )
  }