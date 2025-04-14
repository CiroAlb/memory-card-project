import { useState } from "react";
import "./memoryCardApp.css";

const arr = [
  {
    id: "captain america",
    url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnBxNnh1bnNqZmNtenBraHVkeGp0ZDcwcnRwY21namVwMTV4b2w0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PktXhCHFkpkre/giphy.gif",
    clicked: false,
  },
  {
    id: "winter soldier",
    url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnE2b2sxdGYxZXJzdXl6YmNlbzVvMWsxZzJhZDJwcm5qaGoyNmdnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QwDHXlkRT4MJG/giphy.gif",
    clicked: false,
  },
  {
    id: "venom",
    url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd6cnlzZmVtNXMxdXcwYjg0Y2M2NnQ2Mng5ejFmZjV2OTM3YTNvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1BDQgv6RNbC9y/giphy.gif",
    clicked: false,
  },
  {
    id: "hulk",
    url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemkxZXlhcGdxaWQyb3Bsa3l2cDR6cml4M2V5MHhoMXdkaTRlOTluZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9g6UbuoqTFdAI/giphy.gif",
    clicked: false,
  },
  {
    id: "juggernaut",
    url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXczaXZieGFpOGlkam1zaGNoaDB5M2N5bjIxNnk2ejhzcHQ0NDF1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rv3vUN7M4uXv2/giphy.gif",
    clicked: false,
  },
  {
    id: "storm",
    url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRlbnV0YnkwYzRqYTM4ZnNtNWtpeXBzMDRodXFxY2J2eDJwdWdnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/14nOReXt2xWpR6/giphy.gif",
    clicked: false,
  },
  {
    id: "amingo",
    url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJid2Q4ZmVqbTM0OGx3dWQydXNzMTV6NzA1Z3lub2FpcDExNmVxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6izQiY0qP2onK/giphy.gif",
    clicked: false,
  },
  {
    id: "iron man & captain america",
    url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VtcHBtZ2hrYmtnaHphbHVpNjhqczJuZHhtMHNpb2s2MTlnemE3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/aEBPPgXhjaUHS/giphy.gif",
    clicked: false,
  },
  {
    id: "guile",
    url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJjc2owc2FiOXB5ZXhzOHZkdjJ3cmhkZDR4Z3d6MnV2eXQyejJ4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OglKwEZCyIp5C/giphy.gif",
    clicked: false,
  },
  {
    id: "naranja",
    url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXp2ZXdzNmdzcDE1Z3h0OXVvc20zeGFranByODhrNXluM3M3azJuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HOuFofPvrnKNi/giphy.gif",
    clicked: false,
  },
  {
    id: "blanco",
    url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamViZmE1ZmprZ2kzcmc1ZWUwMXhjZXM0dHY2eGlyM2t0dDZhbzI3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/aNUGSwLFKuSQ/giphy.gif",
    clicked: false,
  },
  {
    id: "lounge",
    url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGc3aXBkbXBhb29keWozZ3hweTJwMG1odDZmMjR6dHVhdTExaXNhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/10ECrpQ0D4Q1pK/giphy.gif",
    clicked: false,
  },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function CardMemory({
  id,
  url,
  randomArr,
  setRandomArr,
  obj,
  score,
  setScore,
  maxScore,
  setMaxScore,
}) {
  const resetClicked = () => {
    const updated = randomArr.map((hero) => ({
      ...hero,
      clicked: false,
    }));
    setRandomArr(updated);
  };

  const clickFunction = () => {
    setRandomArr(shuffleArray(arr));
    if (!obj.clicked) {
      const updatedArr = randomArr.map((hero) =>
        hero.id === obj.id ? { ...hero, clicked: true } : hero
      );
      setRandomArr(shuffleArray(updatedArr));
      setScore(score + 1);
    } else {
      resetClicked();
      if (score > maxScore) {
        setMaxScore(score);
      }
      setScore(0);
      setRandomArr(shuffleArray(arr));
    }
  };

  return (
    <button onClick={clickFunction} className="card">
      <img src={url} alt={id} className="heroe-img" />
      <div className="text-div">
        <h2>{id}</h2>
      </div>
    </button>
  );
}

function MemoryCardApp() {
  const [randomArr, setRandomArr] = useState(shuffleArray(arr));
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  return (
    <div className="main">
      <div className="main-text-div">
        <h2>Memory Game</h2>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
        <p>
          score: {score} // max score: {maxScore}
        </p>
      </div>

      <div className="app-div">
        {randomArr.map((obj, index) => (
          <CardMemory
            id={obj.id}
            url={obj.url}
            key={obj.id}
            randomArr={randomArr}
            setRandomArr={setRandomArr}
            obj={obj}
            score={score}
            setScore={setScore}
            maxScore={maxScore}
            setMaxScore={setMaxScore}
          ></CardMemory>
        ))}
      </div>
    </div>
  );
}

export default MemoryCardApp;
