import styled from "styled-components";



export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a{
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;

    @media (max-width: 768px) {
        display: none;
    }
    
`;

export const Title = styled.div<{ active:boolean }>`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: ${props => props.active ? '#12ADC1' : '#FDD037'};
    
`;

export const Description = styled.div<{ active:boolean }>`
    text-align: right;
    font-size: 13px;
    color: ${props => props.active ? '#12ADC1' : '#FDD037'};
`;

export const IconArea = styled.div<{ active:boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#12ADC1' : '#FDD037'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-left: 5px;
        display: none;

        svg{
            width: 17px;
        }
    }
    @media (max-width: 500px) {
        width: 35px;
        height: 34px;
        margin-left: 5px;

        svg{
            width: 17px;
        }
    }
`;

export const Point = styled.div<{ active:boolean }>`
    width: 6px;
    height: 6px;
    border: 3px solid ${props => props.active ? '#12ADC1' : '#FDD037'};
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#12ADC1' : '#FFF'};

    @media (max-width: 768px) {
        margin: 0 -6px 0 20px;
    }
`;
