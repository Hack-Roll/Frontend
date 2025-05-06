import "./Button.css";

function Button({ text, type, ...props }) {
  return (
    <button type={type} className="button" {...props}>
      {text}
    </button>
  );
}

export default Button;