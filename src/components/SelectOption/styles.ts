import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
    /* display: inline; */
    background-color: #fff;
    border: 1px solid ${props => props.selected  ? '#FDD037' : '#fff'};
    color: #12ADC1;
    border-radius: 10px;
    padding: 5px;
    margin: 10px 10px;
    align-items: center;
    width: 150px;
    cursor: pointer;

    &:hover{
        border: 1px solid #12ADC1;
        box-shadow: 2px 2px 5px #d3d3d3;
    }

    @media (max-width: 768px) {
        width: 35%;
    }
`;

export const Img = styled.div`
    img{
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        img{
            width: 100%;
        }
    }
`;

export const Product = styled.div`
    display: inline-block;
`;

export const Title = styled.div`
    text-align: center;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;