import { BodyDiv } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Body() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const court_num = location.state.court_num;
    const ppl_num = location.state.ppl_num;
    const [ curr_game, set_curr_game ] = useState(1);

    // 수정 가능
    const game_num = 15; // html은 직접 수정 필요

    const fill_table = (court_num, ppl_num) => {
        
    }
    
    const handleOnClickBtns = (e) => {
        const order = e.target.id;
        if (order === 'prevBtn') {
            if (curr_game !== 1) {
                set_curr_game(curr_game - 1);
            }
        } else if (order === 'nextBtn') {
            if(curr_game !== game_num) {
                set_curr_game(curr_game + 1);
            }
        } else if (order === 'exitBtn') {
            const ans = window.confirm('本当に戻りますか？');
            if (ans) {
                navigate('/');
            }
        }
    }

    const make_table_frame = (court_num, curr_game) => {
        const table_head = document.getElementById('table').children[0];
        table_head.innerHTML = ``;
        for (let i = 1; i <= court_num; i++) {
            const prev_head = table_head.innerHTML;
            table_head.innerHTML = prev_head + `
                <th>コート ${i}</th>
            `
        }

        for (let i = 1; i <= game_num; i++) {
            const table_body = document.getElementById(`game_${i}`);
            table_body.innerHTML = ``;
            for (let j = 0; j < court_num; j++) {
                const prev_body = table_body.innerHTML;
                table_body.innerHTML = prev_body + `
                    <td id="game_${i}_court_${j+1}">dummy</td>
                `
            }
        }

        for (let i = 1; i <= game_num; i++) {
            const game_tr = document.getElementById(`game_${i}`);
            game_tr.style.backgroundColor = '#fff';
            game_tr.style.color = '#000';
        }

        const curr_game_tr = document.getElementById(`game_${curr_game}`);
        curr_game_tr.style.backgroundColor = '#AE905E';
        curr_game_tr.style.color = '#fff';
    }

    useEffect(() => {
        make_table_frame(court_num, curr_game);
        fill_table(court_num, ppl_num);
    }, [curr_game])

    return (
        <BodyDiv>
            <table id="table">
                {/* header */}
                <tr></tr>
                {/* content */}
                <tr id="game_1"></tr>
                <tr id="game_2"></tr>
                <tr id="game_3"></tr>
                <tr id="game_4"></tr>
                <tr id="game_5"></tr>
                <tr id="game_6"></tr>
                <tr id="game_7"></tr>
                <tr id="game_8"></tr>
                <tr id="game_9"></tr>
                <tr id="game_10"></tr>
                <tr id="game_11"></tr>
                <tr id="game_12"></tr>
                <tr id="game_13"></tr>
                <tr id="game_14"></tr>
                <tr id="game_15"></tr>
            </table>
            <div>
                <p id="prevBtn" onClick={handleOnClickBtns}>Prev</p>
                <p id="nextBtn" onClick={handleOnClickBtns}>Next</p>
            </div>
            <p id="exitBtn" onClick={handleOnClickBtns}>Exit</p>
        </BodyDiv>
    )
}

export default Body