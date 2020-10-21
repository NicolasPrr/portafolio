import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 100%;
    margin: 5%;
    padding: 10px;
    background-color: white;
    box-shadow:  3px 3px 9px 6px #ccc;
    border-radius: 10px;
`;

declare type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )

}
export default Card