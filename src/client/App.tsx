import React, { useState, useEffect } from "react";

interface CardObj {
  id: number;
  background: string;
  wasFlipped: boolean;
}

const container: CardObj[] = [
  { id: 1, background: "red", wasFlipped: false },
  { id: 2, background: "blue", wasFlipped: false },
];

const App: React.FC = () => {
  const [cards, setCards] = useState<CardObj[]>(container);
  const [score, setScore] = useState<number>(0);
  const [highscore, setHighscore] = useState<number>(0);

  function handleSetScore(): void {
    setScore((current) => current + 1);
  }

  function handleClickCard(idx: number): void {
    setCards((prevCards) => {
      // Do somehow this
      return [...prevCards];
    });
  }

  function resetCards(): void {
    setScore(0);
    setCards(container);
  }

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score, highscore]);

  return (
    <div className="">
      <div className="header">
        header
        <div className="scoreTable">
          Score:{score}, Highscore:{highscore}
        </div>
      </div>
      <div className="mainPart">
        {cards.map((item) => (
          <div
            className="card"
            key={item.id.toString()}
            onClick={() => {
              handleClickCard(item.id);
            }}
          >
            <div className="photo">Photo</div>
            <div className="name"></div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          resetCards();
        }}
      >
        Reset
      </button>
      <div className="footer"></div>
    </div>
  );
};

export default App;
