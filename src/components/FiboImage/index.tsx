import React from 'react'
import styled from 'styled-components'
import {IpropsContainer, IpropsItem} from './Interfaces'
import {fragmentString, getColumns, getRows} from './helpers'
const [dWidth, dHeight] = ['300px', '200px'];
export const Container = styled.div<IpropsContainer>`
   display: grid;
   grid-template-rows: ${props => fragmentString(getRows(props.boxes) - 1) };
   grid-template-columns: ${props => fragmentString(getColumns(props.boxes) - 1)};
   /* width: ${dWidth};  */
   width: 100%; 
   height: 100%;
   max-height: ${dHeight};
   max-width: ${dWidth};
`;


export const ItemImage = styled.div<IpropsItem>`
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 2px;
    grid-row: ${props => props.grid.row};
    grid-column: ${props => props.grid.column};
    &:hover {
        background-color: #264653;
    } ;
`;