import { BodyDiv } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
function Body() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const court_num = location.state.court_num;
    const ppl_num = location.state.ppl_num;
    const game_num = Number(location.state.game_num);
    const [ curr_game, set_curr_game ] = useState(0);
    const [ tableData, setTableData ] = useState([]);
    const [ popUp, setPopUp ] = useState(false);
    
    const handleOnClickBtns = (e) => {
        const order = e.target.id;
        if (order === 'prevBtn') {
            if (curr_game !== 0) {
                set_curr_game(curr_game - 1);
            }
        } else if (order === 'nextBtn') {
            if(curr_game !== game_num - 1) {
                set_curr_game(curr_game + 1);
            }
        } else if (order === 'exitBtn') {
            const ans = window.confirm('本当に戻りますか？');
            if (ans) {
                navigate('/');
            }
        }
    }

    const point_curr_game = () => {
        for (let i = 0; i < game_num; i++) {
            const game_tr = document.getElementById(`game_${i}`);
            game_tr.style.backgroundColor = '#fff';
            game_tr.style.color = '#000';
        }

        const curr_game_tr = document.getElementById(`game_${curr_game}`);
        curr_game_tr.style.backgroundColor = '#AE905E';
        curr_game_tr.style.color = '#fff';
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const fill_table = () => {
        let data = [];
        let people = Array.from({ length: ppl_num }, (_, i) => i + 1);
        
        for (let i = 0; i < game_num; i++) {
            shuffleArray(people);
            let row = [];
            for (let j = 0; j < court_num; j++) {
                let courtPeople = people.slice(j * (ppl_num / court_num), (j + 1) * (ppl_num / court_num));
                row.push(courtPeople);
            }
            data.push(row);
        }
        setTableData(data);
    };

    // set table
    if (tableData.length > 0) {
        for (let i = 0; i < game_num; i++) {
            for (let j = 0; j < court_num; j++) {
                const target_td = document.getElementById(`game_${i}_court_${j}`);
                target_td.innerHTML = ``;
                for (let k = 0; k < 4; k++) {
                    const prev_member = target_td.innerHTML;
                    target_td.innerHTML = prev_member + `${tableData[i][j][k]} `;
                } 
            }
        }

        // make fair
        const gameCnt = [];
        for (let i = 0; i < ppl_num; i++) {
            gameCnt[i] = 0;
        }

        for (let i = 0; i < game_num; i++) {
            for (let j = 0; j < court_num; j++) {
                const curr_game_list = document.getElementById(`game_${i}_court_${j}`).innerHTML.split(' ');
                for (let k = 0; k < 4; k++) {
                    const target = Number(curr_game_list[k]);
                    gameCnt[target - 1]++;
                }
            }
        }
        
        let max_cnt = gameCnt[0], min_cnt = gameCnt[0];
        for (let i = 1; i < ppl_num; i++) {
            if (gameCnt[i] < min_cnt) {
                min_cnt = gameCnt[i];
            }
            if (gameCnt[i] > max_cnt) {
                max_cnt = gameCnt[i];
            }
        }

        const diff = max_cnt - min_cnt;
        if (diff > 3) {
            fill_table();
        }

        console.log(`diff : ${diff}`);

    }

    const make_table_frame = () => {
        const table_head = document.getElementById('table_head');
        table_head.innerHTML = ``;
        for (let i = 1; i <= court_num; i++) {
            const prev_head = table_head.innerHTML;
            table_head.innerHTML = prev_head + `
                <td>コート ${i}</td>
            `
        }

        const table_body = document.getElementById(`table_body`);
        table_body.innerHTML = ``;
        for (let i = 0; i < game_num; i++) {
            const prev_body = table_body.innerHTML;
            table_body.innerHTML = prev_body + `
                <tr id="game_${i}"></tr>
            `
        }

        for (let i = 0; i < game_num; i++) {
            const table_body = document.getElementById(`game_${i}`);
            table_body.innerHTML = ``;
            for (let j = 0; j < court_num; j++) {
                const prev_body = table_body.innerHTML;
                table_body.innerHTML = prev_body + `
                    <td id="game_${i}_court_${j}"></td>
                `
            }
        }
    }

    const handleOnClickPopUpBtn = (e) => {
        const target = e.target.id;
        if (target === 'popUpBtn' || target === 'popUpOverlay'){
            setPopUp(!popUp);
        }
    }
    
    const fillPopUpTable = () => {
        if (popUp) {
            const popUpTableBody = document.getElementById('popUpTableBody');
            popUpTableBody.innerHTML = ``;
            for (let i = 0; i < ppl_num; i++) {
                const prev_body = popUpTableBody.innerHTML;
                popUpTableBody.innerHTML = prev_body + `
                    <tr>
                        <td id="ppl_${i}">${i+1}</td>
                        <td id="ppl_${i}_game"></td>
                    </tr>
                `
            }

            const gameCnt = [];
            for (let i = 0; i < ppl_num; i++) {
                gameCnt.push(0);
            }
            
            for (let i = 0; i < game_num; i++) {
                for (let j = 0; j < court_num; j++) {
                    const curr_game_list = document.getElementById(`game_${i}_court_${j}`).innerHTML.split(' ');
                    for (let k = 0; k < 4; k++) {
                        const target = Number(curr_game_list[k]);
                        gameCnt[target - 1]++;
                    }
                }
            }

            for (let i = 0; i < ppl_num; i++) {
                const target = document.getElementById(`ppl_${i}_game`);
                target.innerText = gameCnt[i];
            }
        }
    }

    useEffect(() => {
        make_table_frame();
        fill_table();
    }, [])

    useEffect(() => {
        point_curr_game();
    }, [curr_game])

    useEffect(() => {
        fillPopUpTable();
    }, [popUp])

    return (
        <BodyDiv>
            <p id="popUpBtn" onClick={handleOnClickPopUpBtn}>一人当たりのゲーム数を見る</p>
            <table>
                <thead>
                    <tr id="table_head">
                    </tr>
                </thead>
                <tbody id="table_body">
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