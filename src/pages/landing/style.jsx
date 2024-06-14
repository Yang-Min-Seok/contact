import styled from "styled-components";

export const BodyDiv = styled.div`
    
    font-family: sans-serif;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3:nth-child(1) {
        span {
            color: brown;
        }
        text-align: center;
        margin: 0;
        line-height: 3;
        font-size: 130%;
    }
    
    ul:nth-child(2) {
        padding: 0;
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        li {
            width: calc(90% / 4);
            list-style: none;
            text-align: center;
            font-size: 130%;
            line-height: 2.5;
            border: 2px solid brown;
            box-sizing: border-box;
            border-radius: 10%;
            font-weight: 700;
        }
    }

    h3:nth-child(3) {
        span {
            color: brown;
        }
        text-align: center;
        margin: 0;
        line-height: 3;
        font-size: 130%;
    }

    p:nth-child(4) {
        margin: 0;
        text-align: center;
        font-size: 130%;
        font-weight: 500;
        input {
            border : 2px solid brown;
            border-radius : 10px;
            box-sizing: border-box;
            line-height: 2;
            padding: 0;
            text-align: center;
            width: 30%;
            font-size: 100%;
        }
    }

    h3:nth-child(5) {
        span {
            color: brown;
        }
        text-align: center;
        margin: 0;
        line-height: 3;
        font-size: 130%;
    }

    p:nth-child(6) {
        margin: 0;
        text-align: center;
        font-size: 130%;
        font-weight: 500;
        input {
            border : 2px solid brown;
            border-radius : 10px;
            box-sizing: border-box;
            line-height: 2;
            padding: 0;
            text-align: center;
            width: 30%;
            font-size: 100%;
        }
    }

    h3:nth-child(7) {
        span {
            color: brown;
        }
        text-align: center;
        margin: 0;
        line-height: 3;
        font-size: 130%;
    }

    button:nth-child(8) {
        display: block;
        margin: 0 auto;
        background-color: #fff;
        border : 2px solid brown;
        border-radius: 10px;
        width: 40%;
        font-size: 130%;
        line-height: 2;
        padding: 0;
        color: red;
        font-weight: 600;
        transition: all 0.7s;
    }

`