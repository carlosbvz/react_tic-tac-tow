import React from 'react';
import styled from 'styled-components'

const StyledCell = styled.div`
  width: 33%;
  height: 33%;
  box-sizing: border-box;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  cursor: pointer;
`;

export default function Cell(props) {

    console.log('rendering cell');

    return (
        <StyledCell onClick={() => props.setCellValue(props.i, props.j)}>{props.value}</StyledCell>
    )
}