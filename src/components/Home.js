import Hero from "./Hero";
import Announcement from "./Announcement";
import Curriculum from "./Curriculum";
import PerformanceShowcase from "./PerformanceShowcase";
import FreeTutorial from "./FreeTutorial";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Announcement />
      <Curriculum />
      <PerformanceShowcase />
      {/* <FreeTutorial /> */}
      <Contact />
    </div>
  );
}

export default Home;
