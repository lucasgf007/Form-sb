import styled from "styled-components";

export const Container = styled.div`
    
    h1{
        text-transform: uppercase;
        padding: 15px 0 0 10px;
        font-size: 28px;
        font-weight: 900;
    }
    ul li {
        font-weight: 800;
        color: #313243;
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