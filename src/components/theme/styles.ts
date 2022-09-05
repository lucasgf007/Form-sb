import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    color: #0295A9;
    min-height: 100vh;

    p {
        font-size: 16px;
        color: #FDD037;
        margin-right: 100px;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        p{
            margin-right: 0;
        }
        
    }
`;

export const Area = styled.div`
    margin: auto;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 2px solid #12ADC1;

    @media (max-width: 768px) {
        width: 6%;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;

    @media (max-width: 768px) {
        padding: 0 15px 0 15px;
        max-width: 94%;
    }
`;
