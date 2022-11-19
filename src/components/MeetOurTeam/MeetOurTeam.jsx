import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MeetOurTeam({ teamMembers }) {
  const memberCard = teamMembers.map((member) => {
    return (
      <div className="m-4" key={member.name}>
        <img
          className="rounded-full"
          src={member.src}
          alt={`${member.name} png`}
        />
        <h3 className="text-3xl font-semibold text-accent m-2 text-center">
          {member.name}
        </h3>
        <h2 className="text-lg text-gray text-center">
          {member.position}
          <span className="m-2">
            <a href={member.linkedin} rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-blue-500 "
              />
            </a>
          </span>
        </h2>
      </div>
    );
  });
  return (
    <section className="bg-gray-500/5">
      <h1 className="text-5xl text-secondary text-center py-8 font-semibold">
        Meet Our <span className="text-accent">Team</span>
      </h1>
      <div className="grid md:grid-cols-3 place-content-center gap-x-20 gap-y-8 px-10">
        {memberCard}
      </div>
    </section>
  );
}

export default MeetOurTeam;
