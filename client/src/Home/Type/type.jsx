import React from "react";
import TypeCard from "./type-component";
import { typeCard } from "./type-content";
import "./index.scss";

const Type = () => {
  return (
    <div className="type-main">
      {typeCard.map((cards) => {
        return <TypeCard key={cards.id} {...cards}></TypeCard>;
      })}
    </div>
  );
};

export default Type;
