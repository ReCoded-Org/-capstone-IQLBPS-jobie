import Showcase from "./Showcase";

const JobsShowcase = ({ showcaseArray }) => {
  return (
    <div className="py-10 flex justify-center gap-x-20 flex-wrap bg-gray-500/5">
      {showcaseArray.map((data) => {
        return (
          <Showcase
            key={data.id}
            header={data.header}
            body={data.body}
            button={data.button}
          />
        );
      })}
    </div>
  );
};
export default JobsShowcase;
