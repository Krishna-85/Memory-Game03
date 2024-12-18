import React, { useState, useEffect } from "react";
import Card from "./Components/Card.jsx";

const initialCards = [
  { id: 1, content: "🐹" },
  { id: 2, content: "🐹" },
  { id: 3, content: "⏰" },
  { id: 4, content: "⏰" },
  { id: 5, content: "⭐" },
  { id: 6, content: "⭐" },
  { id: 7, content: "🎲" },
  { id: 8, content: "🎲" },
  { id: 9, content: "🎯" },
  { id: 10, content: "🎯" },
  { id: 11, content: "🚀" },
  { id: 12, content: "🚀" },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    // Shuffle cards
    setCards(shuffleArray([...initialCards]));
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || flippedCards.includes(card.id)) return;

    setFlippedCards((prev) => [...prev, card.id]);

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      checkMatch(card);
    }
  };

  const checkMatch = (card) => {
    const [firstCardId] = flippedCards;
    const firstCard = cards.find((c) => c.id === firstCardId);

    if (firstCard.content === card.content) {
      setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
    }

    setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Memory Card Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <div className="mt-6">
        <p>Moves: {moves}</p>
      </div>
    </div>
  );
};

export default App;
