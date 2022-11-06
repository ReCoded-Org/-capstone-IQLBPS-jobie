import Showcase from './Showcase';

const JobsShowcase = ({ showcaseArray }) => {
  return (
    <div className="my-20 flex justify-center gap-x-20 flex-wrap w-screen ">
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
