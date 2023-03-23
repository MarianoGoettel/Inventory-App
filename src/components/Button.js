import React from "react";

const Button = ({ onClick, name, className }) => {
  return (
    <div>
      <button type='button' onClick={onClick} class={className}>
        {name}
      </button>
    </div>
  );
};

export default Button;
