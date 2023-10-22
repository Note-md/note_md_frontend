// BoardButton.js
import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import './BoardButton.css'; // Import the CSS file for styling (adjust the path based on your file structure)

const BoardBtn = () => {
  const history = useHistory();

  const navigateToBoard = () => {
    // Navigate to the 'Board' page when the button is clicked
    history.push('/Board'); // Assuming 'Board' is the route/path to your Board page
  };

  return (
    <button className="board-button" onClick={navigateToBoard}>
      Board
    </button>
  );
};

export default BoardBtn;
