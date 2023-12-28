const InputButton = ({ children }) => {
  return (
    <input
      type="submit"
      className="btn btn-outline bg-transparent border-[#D1B06B] text-[#D1B06B] hover:scale-125 hover:text-[#D1B06B] border-2"
      value={children}
    />
  );
};

export default InputButton;
