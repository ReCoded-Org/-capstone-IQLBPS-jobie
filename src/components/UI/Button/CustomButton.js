const CustomButton = ({ btnName }) => {
  return (
    <button
      type="button"
      className="w-25 h-7 bg-white text-accent border-2 
      border-accent rounded-3xl px-5 small:w-15 small:h-5 
      small:rounded-xs small:px-2 hover:border-primary hover:text-primary"
    >
      {btnName}
    </button>
  );
};
export default CustomButton;
