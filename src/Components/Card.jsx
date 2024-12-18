import React from "react";

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center w-20 h-20 bg-gray-800 border border-gray-700 cursor-pointer
        ${isFlipped ? "bg-white" : ""}`}
    >
      {isFlipped ? (
        <span className="text-2xl font-bold">{card.content}</span>
      ) : (
        <span className="text-white">?</span>  
      )}
    </div>
  );
};

export default Card;
