import React from "react";
import classes from "../styles/Question.module.css";
import Answer from "./Answer";

export default function Question({ answers = [] }) {
  return answers.map((answers, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answers.title}
      </div>
      <Answer input={false} option={answers.options} />
    </div>
  ));
}
