import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 95%;
    background-color: white;
    box-shadow:  3px 3px 9px 6px #ccc;
    border-radius: 7px;
    margin: 14px 0 0 0 ;
`;


declare type CardProps  = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )

}

export const WrapperIns = styled.div`
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
`;

export default Card