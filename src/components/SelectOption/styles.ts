import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
    display: inline;
    background-color: #fff;
    border: 2px solid ${props => props.selected  ? '#fcc302' : '#fff'};
    color: #0988A8;
    border-radius: 10px;
    padding: 5px;
    margin: 0 10px;
    align-items: center;
    width: 150px;
    cursor: pointer;

    &:hover{
        border: 2px solid #496459;
    }
`;

export const Img = styled.div`
    img{
        border-radius: 10px;
    }
`;

export const Product = styled.div`
    display: inline-block;
`;

export const Title = styled.div`
    text-align: center;
`;