// BoardButton.js
import React from 'react';
import './BoardButton.css'; // Import the CSS file for styling (adjust the path based on your file structure)

const BoardBtn = ({ label, onClick }) => {
  return (
    <button className="board-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BoardBtn;
