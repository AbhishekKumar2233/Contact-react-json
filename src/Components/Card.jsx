import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <Avatar img={props.img} />
      <Details detail={props.contact} />
      <Details detail={props.email} />
    </div>
  );
}
