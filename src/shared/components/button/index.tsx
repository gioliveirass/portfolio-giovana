import "./index.scss";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button className="custom-btn" {...rest}>
      <p>{label}</p>
    </button>
  );
};

export default Button;
