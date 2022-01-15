import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avtar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}
