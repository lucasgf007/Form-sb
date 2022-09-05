import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 16px;
        color: #FDD037;
        margin-right: 100px;
        font-weight: 500;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #58a8bc;
        margin: 30px 0;
    }
    label{
        font-size: 16px;
        margin-top: 20px;

        input {
            display: block;
            margin: 7px 0;
            box-sizing: border-box;
            width: 100%;
            padding: 15px 10px;
            border: 2px solid #FFFFFF;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            background-color: #12ADC1;
        }
    }
    button {
        background-color: #FDD037;
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 15px 20px;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
    }

    .backButton{
        
        font-size: 16px;
        text-decoration: none;
        padding: 15px 20px;
        color: #FDD037;
    }
    .footer{
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        .orcamento{
            text-align: center;
        }
        .backButton{
            display: none;
        }
        
    }
`

export const Allproducts = styled.div`
    display: flex;
`;