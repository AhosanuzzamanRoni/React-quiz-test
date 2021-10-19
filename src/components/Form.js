import React from "react";
import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <div>
      <form class={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}
