import React from "react";
import RoadMaps from "../../components/Roadmaps/RoadMaps";
import AboutHero from "../../components/aboutHero/AboutHero";

const Roadmaps = () => {
  return (
    <div>
      <RoadMaps />
      <AboutHero title="Developer Roadmap" sub="Follow these roadmaps and become a hero in any path you chooese!" img="/assets/aboutHero/one.jpg" />
    </div>
  );
};
export default Roadmaps;
