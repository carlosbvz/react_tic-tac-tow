import React, {useState} from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';

const StyledApp = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`

export default function App() {

  const players = {
    X:'X',
    O: 'O'
  };
  Object.freeze(players);
  const labels = {
    playing: 'Current Player:',
    end: 'This player has won:'
  };
  Object.freeze(labels)
  const [label, setLabel] = useState(labels.playing)
  const [isGameOn, setIsGameOn] = useState(true);
  const [gridController, setGridController] = useState([['','',''], ['','',''], ['','','']]);
  const [currentPlayer, setCurrentPlayer] = useState(players.X);

  const restart = () => {
    setGridController([['','',''], ['','',''], ['','','']]);
    setIsGameOn(true);
    setLabel(labels.playing);
    setCurrentPlayer(players.X);
  }

  const updateCurrentPlayer = () => {
    (currentPlayer === players.X) ? setCurrentPlayer(players.O) : setCurrentPlayer(players.X);
  };
  const updateGrid = (rowIndex, colIndex) =>  {
    const newGrid = [...gridController];
    newGrid[rowIndex][colIndex] = currentPlayer;
    setGridController(newGrid);
  };
  const hasGameEnded = () => {
    if(gridController[0][0] && gridController[0][0] === gridController[0][1] && gridController[0][1] === gridController[0][2]) return true;
    if(gridController[1][0] && gridController[1][0] === gridController[1][1] && gridController[1][1] === gridController[1][2]) return true;
    if(gridController[2][0] && gridController[2][0] === gridController[2][1] && gridController[2][1] === gridController[2][2]) return true;

    if(gridController[0][0] && gridController[0][0] === gridController[1][0] && gridController[0][0] === gridController[2][0]) return true;
    if(gridController[0][1] && gridController[0][1] === gridController[1][1] && gridController[0][1] === gridController[2][1]) return true;
    if(gridController[0][2] && gridController[0][2] === gridController[1][2] && gridController[0][2] === gridController[2][2]) return true;

    if(gridController[0][0] && gridController[0][0] === gridController[1][1] && gridController[0][0] === gridController[2][2]) return true;
    if(gridController[2][0] && gridController[2][0] === gridController[1][1] && gridController[1][1] === gridController[0][2]) return true;
  };

  const setCellValue = (rowIndex, colIndex) => {
    if (!isGameOn) return;
    if(gridController[rowIndex][colIndex]) return;
    updateGrid(rowIndex, colIndex);
    if(hasGameEnded()) {
      setIsGameOn(false);
      setLabel(labels.end);
      return;
    }
    updateCurrentPlayer();
  }

  return (
    <StyledApp>
      <h1>Tic Tac Toe</h1>
      <button onClick={restart}>Re-Start</button>
      <p>{label} {currentPlayer}</p>
      <Grid  setCellValue={setCellValue} onClick={updateCurrentPlayer} gridController={gridController}></Grid>
    </StyledApp>
  );
}
