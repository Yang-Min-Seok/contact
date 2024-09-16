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
    const [ gameCnt, setGameCnt ] = useState([]);

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

    // fill up table
    const fillUpTable = () => {
        // 게임 참가 수 카운트를 위한 배열
        const gamePerPpl = [];
        // 배열 초기화
        for (let i = 0; i < pplNum; i++) {
            gamePerPpl.push(0);
        }
        
        // 한 타임에 들어가는 인원 수 계산
        const participants = courtNum * 4;
        
        for (let i = 0; i < gameNum; i++) {
            // 현재 게임 멤버 뽑기
            const currGameMember = getSortedIndexes(gamePerPpl, participants);
            // 현재 게임 멤버 랜덤 돌리기
            const currGameMemberRandom = getRandomNumbers(currGameMember);
            // 테이블에 채우기
            printTable(currGameMemberRandom, i, participants);
            // 게임 참가 수 카운트
            for (let i = 0; i < participants; i++) {
                gamePerPpl[currGameMemberRandom[i]]++;
            }
        }
        setGameCnt(gamePerPpl);
    }
    
    const printTable = (currGameMemberRandom, gameIdx, participants) => {
        let courtIdx = 0;
        let memberCount = 0; // 코트 내 멤버 수를 추적
    
        for (let i = 0; i < participants; i++) {
            // 4명의 멤버가 배치된 후에는 다음 코트로 이동
            if (i > 0 && i % 4 === 0) {
                courtIdx++;
                memberCount = 0; // 다음 코트로 넘어가면 멤버 카운트 초기화
            }

            // 넣을 tr 태그 확보
            const target = document.getElementById(`game${gameIdx}court${courtIdx}`);
    
            // 해당 코트의 innerHTML을 업데이트
            if (target) {
                if (memberCount === 0) {
                    target.innerHTML = ''; // 코트의 innerHTML을 초기화
                }
    
                target.innerHTML += `
                    ${currGameMemberRandom[i] + 1}
                `;
    
                memberCount++;
            }
        }
    }

    const getSortedIndexes = (gamePerPpl, k) => {
        // 인덱스를 배열로 변환
        const indexes = gamePerPpl.map((_, index) => index);

        // gamePerPpl 값을 기준으로 인덱스 배열을 정렬
        indexes.sort((a, b) => gamePerPpl[a] - gamePerPpl[b]);

        // 정렬된 인덱스 중 상위 k개 반환
        return indexes.slice(0, k);
    }

    const getRandomNumbers = (arr) => {
        // 전달받은 배열 복사 (원본 배열을 수정하지 않기 위해)
        const shuffled = [...arr];

        // Fisher-Yates 알고리즘을 사용해 배열을 랜덤하게 섞음
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
      }
    
    // pointing currGame
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

    // handling pop up event
    const handleOnClickPopUpBtn = (e) => {
        const target = e.target.id;
        if (target === 'popUpBtn' || target === 'popUpOverlay'){
            setPopUp(!popUp);
        }
    }
    
    // make pop up Frame
    const makePopUpFrame = () => {
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
        }
    }
    
    // fill pop up table
    const fillPopUpTable = () => {
        if (popUp) {
            for (let i = 0; i < pplNum; i++) {
                const target = document.getElementById(`ppl${i}game`);
                target.innerHTML = `${gameCnt[i]}`;
            }
        }
    }

    // updates
    useEffect(() => {
        makeTableFrame();
        fillUpTable();
    }, [])

    // pointing currGame
    useEffect(() => {
        pointCurrGame();
    }, [currGame])

    // popUp
    useEffect(() => {
        makePopUpFrame();
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