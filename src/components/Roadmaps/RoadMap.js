import RoadMapsButton from '../UI/Button/RoadMapsButton';

const RoadMap = ({ title, roadMapsButton }) => {
  return (
    <div className="mb-10 medium:mb-8 small:mb-5">
      <h1 className="text-dark-gray text-3xl medium:text-2xl small:text-xl font-semibold mb-5">
        {title}
      </h1>
      <div className="grid grid-cols-[1fr_1fr_0.5fr] gap-y-10 gap-x-24 small:gap-x-5 medium:gap-x-15 medium:gap-y-8 small:gap-y-4">
        {roadMapsButton.map((roadMapButton) => (
          <RoadMapsButton
            key={roadMapButton.id}
            svg={roadMapButton.svg}
            title={roadMapButton.title}
            link={roadMapButton.link}
          />
        ))}
      </div>
    </div>
  );
};
export default RoadMap;
