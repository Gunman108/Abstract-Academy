import React from "react";

const Button = ({ styles, click }) => (
  <button type="button" onClick={click} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none ${styles}`}>
    Sign Up
  </button>
);

export default Button;
