import "./Button.css";

function Button({ text, type = "button", onClick, ...props }) {
  return (
    <button type={type} className="button" onClick={onClick} {...props}>
      {text}
    </button>
  );
}

export default Button;