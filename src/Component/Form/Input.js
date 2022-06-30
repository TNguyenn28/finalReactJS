import React from "react";

function Input(props) {
  return (
    <div class="input-block">
      <label for={props.for} class="input-label">{props.label}</label>
      <input type={props.type} name={props.name} id={props.id} className={props.className}></input>
    </div>
  );
}

export default Input;
