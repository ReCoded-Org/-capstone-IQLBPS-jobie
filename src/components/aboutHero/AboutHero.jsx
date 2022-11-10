const AboutHero = (props) => {
  const { title, sub, img } = props;
  return (
    <div className=" bg-zinc-100 flex justify-around items-center px-32 small:px-14 small:py-5 medium:py-6 medium:px-16 large:py-8 large:px-18 pt-12 pb-12 pl-23 small:flex-col">
      <div className=" p-8 ">
        <h4 className="text-dark-gray text-5xl small:text-lg medium:text-2xl large:text-3xl font-bold">
          {title}
        </h4>
        <p className="text-dark-gray text-xl  medium:text-yellow-30 font-inter small:text-xs medium:text-lg large:xl pt-5 small:pt-1 medium:pt-2 large:pt-4">
          {sub}
        </p>
      </div>
      <div className=" p-8 small:pt-3 ">
        <img
          className=" h-auto w-500 small:w-200 medium:w-350 "
          src={img}
          alt="ChitChat Logo"
        />
      </div>
    </div>
  );
};

export default AboutHero;