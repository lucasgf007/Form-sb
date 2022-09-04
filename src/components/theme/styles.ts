import styled from "styled-components";

export const Container = styled.div`
    background-color: #0295A9;
    color: #fff;
    min-height: 100vh;

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
    border-right: 1px solid #12ADC1;

    @media (max-width: 768px) {
        width: 15%;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;

    @media (max-width: 768px) {
        padding: 0 15px 0 15px;
        max-width: 85%;
    }
`;
