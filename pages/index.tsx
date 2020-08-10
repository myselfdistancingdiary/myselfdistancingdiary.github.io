import Layout from "components/Layout";
import Jumbotron from "components/Jumbotron";
import About from "components/About";
import How from "components/How";
import Diary from "components/Diary";

export default function Page() {
  return (
    <Layout>
      <Jumbotron/>
      <About/>
      <How/>
      <Diary/>
    </Layout>
  );
}
