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
    h3{
        font-size: 20px;
        color: #FDD037;
        font-weight: 900;
    }
    h4{
        font-size: 17px;
        color: #FDD037;
        font-weight: 900;
    }
    hr{
        height: 2px;
        border: 0;
        background-color: #12ADC1;
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
    .limpar{
        color: #FDD037;
        text-decoration: solid;
        cursor: pointer;
        border-bottom: 2px solid #FDD037;
    }
    .footer{
        margin-bottom: 50px;
    }
    
`

export const Allproducts = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;