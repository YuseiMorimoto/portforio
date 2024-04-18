const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6
      bg-blue-gradient font-poppins
      font-medium text-[18px] text-black
      outline-none ${styles}`}
    >
      GetStarted
    </button>
  );
};

export default Button;
