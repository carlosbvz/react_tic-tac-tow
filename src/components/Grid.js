import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const StyledGrid = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



export default function Grid(props) {

    const {gridController} = props;

  return (
    <StyledGrid>
        {gridController.map((row, i) => {
            return row.map((col, j) => {
                return <Cell key={`col${i}-${j}`} value={col} i={i} j={j} setCellValue={props.setCellValue}></Cell>
            })
        })}
    </StyledGrid>
  );
}
