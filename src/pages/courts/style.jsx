import styled from "styled-components";

export const BodyDiv = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p:nth-child(1) {
        margin: 3% auto;
        display: block;
        width: 30%;
        font-family: sans-serif;
        font-size: 120%;
        font-weight: 500;
        color: brown;
        line-height: 2;
        text-align: center;
        border: 2px solid brown;
        box-sizing: border-box;
        border-radius: 10px;
    }

    table:nth-child(2) {
        font-family: sans-serif;
        border-collapse: collapse;
        border: 2px solid brown;
        box-sizing: border-box;
        width: 90%;
        height : 90%;
        margin: 0 auto;
        overflow: scroll;
        thead{
            tr{
                td {
                    text-align: center;
                    padding: 0;
                    border: 2px solid brown;
                    box-sizing: border-box;
                    font-size: 130%;
                    line-height: 2;
                    font-weight: 700;
                    color: #AE905E;
                }   
            }
        }

        tbody{
            tr {
                td {
                    text-align: center;
                    padding: 0;
                    border: 2px solid brown;
                    box-sizing: border-box;
                    font-size: 110%;
                    font-weight: 600;
                }
            }
        }
    }

    div:nth-child(3) {
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: space-around;
        p{
            margin: 0 auto;
            margin-top: 5%;
            font-size: 120%;
            line-height: 3;
            width: 27%;
            text-align: center;
            border: 2px solid brown;
            box-sizing: border-box;
            border-radius: 20px;
            font-weight: 600;
            color: #000;
        }
    }

    p:nth-child(4) {
        margin: 0 auto;
        margin-top: 3%;
        font-size: 120%;
        line-height: 2.5;
        width: 30%;
        text-align: center;
        border: 2px solid red;
        box-sizing: border-box;
        border-radius: 20px;
        font-weight: 600;
    }
`