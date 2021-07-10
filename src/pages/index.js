import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import NewBackgroundAnimation from "../components/BackgrooundAnimation/NewBackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Hero />
        <NewBackgroundAnimation />
      </Section>

      {/* <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
