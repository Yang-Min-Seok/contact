import styled from "styled-components";
import lineShare from "../../assets/images/lineShare.png";

export const BodyDiv = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p:nth-child(1) {
        margin: 3% auto;
        display: block;
        width: 60%;
        font-family: sans-serif;
        font-size: 100%;
        font-weight: 700;
        color: #000;
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
                    color: #000;
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
        margin: 3% auto;
        justify-content: space-around;
        p{
            margin: 0 auto;
            font-size: 130%;
            line-height: 3.5;
            width: 25%;
            text-align: center;
            border: 2px solid brown;
            box-sizing: border-box;
            border-radius: 30%;
            font-weight: 600;
            color: #000;
        }
    }

    div:nth-child(4) {
        width: 80%;
        display: flex;
        margin: 3% auto;
        justify-content: space-around;
        p {
            margin: 0 auto;
            font-size: 130%;
            line-height: 3.5;
            width: 25%;
            text-align: center;
            border: 2px solid red;
            box-sizing: border-box;
            border-radius: 30%;
            font-weight: 600;
            color: #000;
        }
        p:nth-child(1), p:nth-child(3) {
            border: 2px solid brown;
        }
        p:nth-child(1) {
            background-image: url(${lineShare});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    }


    // pop up
    #popUpOverlay{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
    }

    #popUp{
        z-index: 2;
        margin: 0 auto;
        width: 80%;
        height: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        background-color: #fff;
        border-radius: 10px;
        
        table:nth-child(1) {
            font-family: sans-serif;
            border-collapse: collapse;
            border: 2px solid brown;
            box-sizing: border-box;
            width: 90%;
            height : 90%;
            margin: 0 auto;
            margin-top: 3%;
            overflow: scroll;
            thead {
                tr {
                    td {
                        text-align: center;
                        padding: 0;
                        border: 2px solid brown;
                        box-sizing: border-box;
                        font-size: 100%;
                        line-height: 2;
                        font-weight: 700;
                        color: #000;
                    }
                    td:nth-child(1) {
                        width: 30%;
                    }
                    td:nth-child(2) {
                        width: 70%;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        text-align: center;
                        padding: 0;
                        border: 2px solid brown;
                        box-sizing: border-box;
                        font-size: 120%;
                        font-weight: 600;
                    }
                }
            }
        }

        p:nth-child(2) {
            margin: 3% auto;
            display: block;
            width: 30%;
            font-family: sans-serif;
            font-size: 100%;
            font-weight: 500;
            color: red;
            line-height: 2;
            text-align: center;
            border: 2px solid brown;
            box-sizing: border-box;
            border-radius: 10px;
        }
    }
`