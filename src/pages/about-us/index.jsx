import React from "react";
import AboutHero from "../../components/aboutHero/AboutHero";
import HowItWorks from "../../components/About/HowItWorks/HowItWorks";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import OurCollaborators from "../../components/OurCollaborators/OurCollaborators";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { teamMembers } from "../../data/teamData";
import { showCaseData } from "../../data/showCaseData";

function AboutPage() {
  return (
    <div>
      <AboutHero
        title="find your job"
        sub="live your dream"
        img="/assets/aboutHero/one.svg"
      />
      <HowItWorks />
      <MeetOurTeam teamMembers={teamMembers} />
      <OurCollaborators showCaseData={showCaseData} />
      <AboutHero />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
}

export default AboutPage;
