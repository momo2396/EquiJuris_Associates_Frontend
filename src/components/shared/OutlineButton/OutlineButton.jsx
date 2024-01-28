import "./OutlineButton.css";

const OutlineButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="farms-button-outline">
      {children}
    </button>
  );
};
export default OutlineButton;
