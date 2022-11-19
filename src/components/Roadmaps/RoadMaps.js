import RoadMap from "./RoadMap";
import { data } from "../../data/RoadMapsData";

const RoadMaps = () => {
  return (
    <div className="pt-10 pb-5 medium:pt-8 small:pt-5 small:pb-3 bg-gray-100">
      <div className="max-w-[80%] mx-auto">
        {data.map((roadMapData) => (
          <RoadMap
            key={roadMapData.id}
            title={roadMapData.titleH1}
            roadMapsButton={roadMapData.RoadMapsData}
          />
        ))}
      </div>
    </div>
  );
};
export default RoadMaps;
