import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    color: #0295A9;
    min-height: 100vh;

    p {
        font-size: 16px;
        color: #313243;
        font-weight: 800;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
        color: #0988A8;
    }
    h3{
        margin: 0;
        padding: 0;
        font-size: 17px;
        color: #313243;
    }
    h4{
        font-size: 17px;
        color: #FCC302;
        font-weight: 800;
    }
    h5{
        font-size: 17px;
        color: #313243;
        font-weight: 800;
    }
    hr{
        height: 2px;
        border: 0;
        background-color: #0988A8;
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
            padding: 10px 10px;
            border: 2px solid #0988A8;
            border-radius: 1px;
            color: #313243;
            outline: 0;
            background-color: #FFF;
            font-size: 16px;
        }
        input::placeholder{
            font-size: 16px;
            color: #0988A8;
            font-size: 14px;
        }
    }
    button {
        background-color: #FCC302;
        margin-top: 20px;
        text-transform: uppercase;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 15px 20px;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
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
    border-right: 1px solid #313243;

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
