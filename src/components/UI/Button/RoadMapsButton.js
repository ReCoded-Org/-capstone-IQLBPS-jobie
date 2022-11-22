const RoadMapsButton = ({ svg, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="small:w-20 small:h-20 w-36 h-32 medium:w-32 medium:h-28 pt-9 medium:pt-7 small:pt-4 shadow-md bg-white rounded-lg hover:scale-105 hover:shadow-lg"
    >
      <svg
        xmlns={svg.xmlns}
        viewBox={svg.viewBox}
        fill="#EC7063"
        className="w-7 medium:w-6 small:w-4 mx-auto mb-1"
      >
        <path d={svg.d} />
      </svg>

      <p className="text-center text-lg medium:text-base small:text-sm">
        {title}
      </p>
    </a>
  );
};
export default RoadMapsButton;
