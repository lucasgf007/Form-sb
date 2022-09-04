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

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFFFFF;
    
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #FDD037;
`;

export const IconArea = styled.div<{ active:boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#00E33B' : '#FDD037'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-left: 5px;

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
    border: 3px solid ${props => props.active ? '#12ADC1' : '#FFFFFF'};
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#00E33B' : '#0295A9'};

    @media (max-width: 768px) {
        margin: 0 -6px 0 20px;
    }
`;
