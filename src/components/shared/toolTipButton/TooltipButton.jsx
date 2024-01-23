const TooltipButton = ({ children, tooltip = "", onClick = () => {} }) => {
  return (
    <div className="tooltip tooltip-right" data-tip={tooltip}>
      <button
        onClick={onClick}
        className="bg-transparent text-[#D1B06B] p-2 border-2 rounded-full border-[#D1B06B]"
      >
        {children}
      </button>
    </div>
  );
};

export default TooltipButton;
