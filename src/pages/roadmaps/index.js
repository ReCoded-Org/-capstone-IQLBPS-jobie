import React from "react";
import RoadMaps from "../../components/Roadmaps/RoadMaps";
import AboutHero from "../../components/aboutHero/AboutHero";

const Roadmaps = () => {
  return (
    <div>
      <AboutHero
        title="Developer Roadmap"
        sub="Follow these roadmaps and become a hero in any path you chooese!"
        img="/assets/aboutHero/img_roads.png"
      />
      <RoadMaps />
    </div>
  );
};
export default Roadmaps;
