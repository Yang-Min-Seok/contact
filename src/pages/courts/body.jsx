import { BodyDiv } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Body() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const court_num = location.state.court_num;
    const ppl_num = location.state.ppl_num;
    const game_num = Number(location.state.game_num);
    const [ curr_game, set_curr_game ] = useState(1);
    
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

    const point_curr_game = () => {
        for (let i = 1; i <= game_num; i++) {
            const game_tr = document.getElementById(`game_${i}`);
            game_tr.style.backgroundColor = '#fff';
            game_tr.style.color = '#000';
        }

        const curr_game_tr = document.getElementById(`game_${curr_game}`);
        curr_game_tr.style.backgroundColor = '#AE905E';
        curr_game_tr.style.color = '#fff';
    }

    const fill_table = () => {
        
    }

    const make_table_frame = () => {
        const table_head = document.getElementById('table_head');
        console.log(table_head);
        table_head.innerHTML = ``;
        for (let i = 1; i <= court_num; i++) {
            const prev_head = table_head.innerHTML;
            table_head.innerHTML = prev_head + `
                <td>コート ${i}</td>
            `
        }

        const table_body = document.getElementById(`table_body`);
        table_body.innerHTML = ``;
        for (let i = 1; i <= game_num; i++) {
            const prev_body = table_body.innerHTML;
            table_body.innerHTML = prev_body + `
                <tr id="game_${i}"></tr>
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
    }

    useEffect(() => {
        make_table_frame();
        fill_table();
    }, [])

    useEffect(() => {
        point_curr_game();
    }, [curr_game])

    return (
        <BodyDiv>
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
        </BodyDiv>
    )
}

export default Body