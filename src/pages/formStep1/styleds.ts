import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
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
            border: 2px solid #58a8bc;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            background-color: #58a8bc;
        }
    }
    button {
        background-color: #00e33b;
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 15px 20px;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
    }
`