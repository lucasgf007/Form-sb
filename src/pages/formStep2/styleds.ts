import styled from "styled-components";

export const Container = styled.div`
    

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
    .min-flex{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .direita{
        margin-left: 20px;
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