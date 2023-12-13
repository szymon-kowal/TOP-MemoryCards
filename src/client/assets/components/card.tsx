import React from "react";
import type { CardObj } from "./interfaces";

interface CardsInterface {
  container: CardObj[];
  handleSetScore: (id: number) => void;
  handleClickCard: (id: number) => void;
}

const Cards: React.FC<CardsInterface> = ({
  container,
  handleSetScore,
  handleClickCard,
}) => {
  return (
    <>
      {container.map((item) => (
        <div
          className="card"
          key={item.id.toString()}
          onClick={() => {
            handleSetScore(item.id);
            handleClickCard(item.id);
            console.log(item);
          }}
        >
          <img src={item.background} alt="Cat gif meme" />
        </div>
      ))}
    </>
  );
};

export default Cards;
