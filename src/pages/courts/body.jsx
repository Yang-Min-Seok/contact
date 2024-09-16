import { BodyDiv } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Body() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const courtNum = location.state.court_num;
    const pplNum = location.state.ppl_num;
    const gameNum = Number(location.state.game_num);
    const [ currGame, setCurrGame ] = useState(0);
    const [ popUp, setPopUp ] = useState(false);
    
    // btn control
    const handleOnClickBtns = (e) => {
        const order = e.target.id;
        if (order === 'prevBtn') {
            if (currGame !== 0) {
                setCurrGame(currGame - 1);
            }
        } else if (order === 'nextBtn') {
            if(currGame !== gameNum - 1) {
                setCurrGame(currGame + 1);
            }
        } else if (order === 'exitBtn') {
            const ans = window.confirm('本当に戻りますか？');
            if (ans) {
                navigate('/');
            }
        }
    }

    // point current game
    const pointCurrGame = () => {
        for (let i = 0; i < gameNum; i++) {
            const gameTr = document.getElementById(`game${i}`);
            gameTr.style.backgroundColor = '#fff';
            gameTr.style.color = '#000';
        }

        const currGameTr = document.getElementById(`game${currGame}`);
        currGameTr.style.backgroundColor = '#AE905E';
        currGameTr.style.color = '#fff';
    }

    // make frame
    const makeTableFrame = () => {
        const tableHead = document.getElementById('tableHead');
        tableHead.innerHTML = ``;
        for (let i = 1; i <= courtNum; i++) {
            const prevHead = tableHead.innerHTML;
            tableHead.innerHTML = prevHead + `
                <td>コート ${i}</td>
            `
        }

        const tableBody = document.getElementById(`tableBody`);
        tableBody.innerHTML = ``;
        for (let i = 0; i < gameNum; i++) {
            const prevBody = tableBody.innerHTML;
            tableBody.innerHTML = prevBody + `
                <tr id="game${i}"></tr>
            `
        }

        for (let i = 0; i < gameNum; i++) {
            const tableBody = document.getElementById(`game${i}`);
            tableBody.innerHTML = ``;
            for (let j = 0; j < courtNum; j++) {
                const prevBody = tableBody.innerHTML;
                tableBody.innerHTML = prevBody + `
                    <td id="game${i}court${j}"></td>
                `
            }
        }
    }

    // handling pop up event
    const handleOnClickPopUpBtn = (e) => {
        const target = e.target.id;
        if (target === 'popUpBtn' || target === 'popUpOverlay'){
            setPopUp(!popUp);
        }
    }
    
    // fill pop up table
    const fillPopUpTable = () => {
        if (popUp) {
            const popUpTableBody = document.getElementById('popUpTableBody');
            popUpTableBody.innerHTML = ``;
            for (let i = 0; i < pplNum; i++) {
                const prevBody = popUpTableBody.innerHTML;
                popUpTableBody.innerHTML = prevBody + `
                    <tr>
                        <td id="ppl${i}">${i+1}</td>
                        <td id="ppl${i}game"></td>
                    </tr>
                `
            }

            const gameCnt = [];
            for (let i = 0; i < pplNum; i++) {
                gameCnt.push(0);
            }
            
            for (let i = 0; i < gameNum; i++) {
                for (let j = 0; j < courtNum; j++) {
                    const currGameList = document.getElementById(`game${i}court${j}`).innerHTML.split(' ');
                    for (let k = 0; k < 4; k++) {
                        const target = Number(currGameList[k]);
                        gameCnt[target - 1]++;
                    }
                }
            }

            for (let i = 0; i < pplNum; i++) {
                const target = document.getElementById(`ppl${i}game`);
                target.innerText = gameCnt[i];
            }
        }
    }

    // updates
    useEffect(() => {
        makeTableFrame();
    }, [])

    useEffect(() => {
        pointCurrGame();
    }, [currGame])

    useEffect(() => {
        fillPopUpTable();
    }, [popUp])

    return (
        <BodyDiv>
            <p id="popUpBtn" onClick={handleOnClickPopUpBtn}>一人当たりのゲーム数を見る</p>
            <table>
                <thead>
                    <tr id="tableHead">
                    </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
            </table>
            <div>
                <p id="prevBtn" onClick={handleOnClickBtns}>Prev</p>
                <p id="nextBtn" onClick={handleOnClickBtns}>Next</p>
            </div>
            <p id="exitBtn" onClick={handleOnClickBtns}>Exit</p>
            {popUp && (
                <div id="popUpOverlay" onClick={handleOnClickPopUpBtn}>
                    <div id="popUp">
                        <table>
                            <thead>
                                <tr>
                                    <td>番号</td>
                                    <td>ゲーム数</td>
                                </tr>
                            </thead>
                            <tbody id="popUpTableBody">

                            </tbody>
                        </table>
                        <p id="popUpBtn" onClick={handleOnClickPopUpBtn}>閉じる</p>
                    </div>
                </div>
            )}
        </BodyDiv>
    )
}

export default Body