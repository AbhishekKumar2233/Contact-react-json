import React from "react";
import Avatar from "./Avatar";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <Avatar img={props.img} />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}
