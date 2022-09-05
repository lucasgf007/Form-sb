import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 16px;
        color: #FDD037;
        font-weight: 900;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    h4{
        font-size: 20px;
        color: #FDD037;
        font-weight: 900;
    }
    h5{
        margin: 0;
        padding: 0;
        font-size: 18px;
        color: #12ADC1;
        font-weight: 900;
    }
    hr{
        height: 2px;
        border: 0;
        background-color: #58a8bc;
        margin: 30px 0;
    }
    label{
        font-size: 16px;
        margin-top: 20px;
        font-size: 17px;
        font-weight: 900;

        input {
            display: block;
            margin: 7px 0;
            box-sizing: border-box;
            width: 100%;
            padding: 15px 10px;
            border: 2px solid #12ADC1;
            border-radius: 10px;
            color: #12ADC1;
            outline: 0;
            background-color: #FFF;
            font-size: 16px;
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
`

export const Allproducts = styled.div`
    display: flex;
`;