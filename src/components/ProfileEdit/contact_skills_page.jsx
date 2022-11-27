function formComponent({ props }) {
  return (
    <div className="flex small:pl-10 px-60 flex-col   w-80 items-start w-100 ">
      <h6 className="py-2">{props.name}</h6>
      {props.desc != null}
      <dt className="pb-4 whitespace-nowrap">{props.desc}</dt>
      <input
        placeholder={props.hint}
        className="px-4 placeholder:text-xs  bg-gray-100 w-60 h-12 max-h-screen rounded-xl"
      />
    </div>
  );
}
function SocialSection({ props }) {
  return (
    <div className="flex flex-col h-96 py-10 bg-gray-200 content-start items-start">
      <h2 className="text-4xl py-12 small:pl-10 px-60 ">{props.name}</h2>
      <div className=" justify-start flex  flex-wrap ">
        {formComponent({ props: { hint: "Linkedin", name: "Linkedin" } })}
        {formComponent({ props: { hint: "Github", name: "Github" } })}
        {formComponent({ props: { hint: "Facebook", name: "Facebook" } })}
      </div>
    </div>
  );
}

function ContactSection({ props }) {
  return (
    <div className="flex  flex-col h-96 bg-gray-200 content-start items-start ">
      <h2 className="text-4xl py-12 small:pl-10 px-60 ">{props.name}</h2>
      <div className=" justify-start flex flex-wrap">
        {formComponent({ props: { hint: "E.g Duhok", name: "Location" } })}
        {formComponent({
          props: { hint: "E.g shady97@gmail.com", name: "Email" },
        })}
        {formComponent({ props: { hint: "+964 750 111 1111", name: "Phone" } })}
      </div>
    </div>
  );
}
function SkillsSection({ props }) {
  return (
    <div className="flex flex-col h-96 py-24 bg-gray-200 content-start items-start">
      <h2 className="text-4xl py-12 small:pl-10 px-60 ">{props.name}</h2>
      <div className=" justify-start flex flex-wrap  ">
        {formComponent({
          props: {
            hint: "Skills",
            name: "Skills",
            desc: "Add skills as commas perated values.",
          },
        })}
      </div>
    </div>
  );
}

function ContactSkills() {
  return (
    <div>
      {ContactSection({ props: { name: "Contact" } })}
      {SocialSection({ props: { name: "Social" } })}
      {SkillsSection({ props: { name: "Skills" } })}
    </div>
  );
}

export default ContactSkills;
