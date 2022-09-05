import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 16px;
        color: #FDD037;
        font-weight: 900;
    }
    h1{
        text-transform: uppercase;
        font-size: 26px;
        font-weight: 900;
    }
    hr{
        height: 2px;
        border: 0;
        background-color: #58a8bc;
        margin: 30px 0;
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