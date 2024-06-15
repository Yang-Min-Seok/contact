import { BodyDiv } from "./style";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Body() {
    
    const navigate = useNavigate();
    const [ court_num, set_court_num ] = useState(0);
    const [ ppl_num, on_change_ppl_num, set_ppl_num ] = useInput(0);
    const [ game_num, on_chage_game_num, set_game_num ] = useInput(0);

    const handle_onclick_courts_num = (e) => {
        try{

            for (let i = 1; i <= 4; i++) {
                const target = document.getElementById(`ppl_${i}`);
                target.style.backgroundColor = `#fff`;
                target.style.boxShadow = `0px 0px`;
                target.style.color = `#000`;
            }
    
            const target_num = e.target.innerText;
            set_court_num(target_num);
            const target = document.getElementById(`ppl_${target_num}`);
            target.style.backgroundColor = `#eee`;
            target.style.boxShadow = `2px 2px`;
            target.style.color = `brown`;

        } catch(err) {
            console.log(err);
        }
        
    };

    const is_proper_num = (court_num, ppl_num, game_num) => {
        court_num = Number(court_num);
        ppl_num = Number(ppl_num);
        game_num  = Number(game_num);
        if (court_num <= 0) {
            return false;
        } else if (ppl_num <= 0) {
            return false;
        } else if (game_num <= 0) {
            return false;
        }
        else if (ppl_num < court_num * 4) {
            return false;
        }
        return true;
    }

    const handle_onclick_start_btn = (e) => {
        if (is_proper_num(court_num, ppl_num, game_num)) {
            navigate(`/courts`, {state : {court_num : court_num, ppl_num : ppl_num, game_num : game_num}});
        }
    };

    useEffect(() => {
        const start_btn = document.getElementById('start_btn');
        if ((court_num > 0 && ppl_num > 0 && game_num > 0) && (ppl_num >= court_num * 4)) {
            start_btn.style.color = `#fff`;
            start_btn.style.backgroundColor = 'brown';
        } else {
            start_btn.style.color = `red`;
            start_btn.style.backgroundColor = `#fff`;
        }
    }, [court_num, ppl_num, game_num])

    useEffect(() => {
        const target_condition = document.getElementById('condition1');
        if (court_num > 0) {       
            target_condition.style.color = `green`;
        } else {
            target_condition.style.color = `red`;
        }
    }, [court_num])
    
    useEffect(() => {
        const target_condition = document.getElementById('condition2');
        if (ppl_num > 0) {       
            target_condition.style.color = `green`;
        } else {
            target_condition.style.color = `red`;
        }
    }, [ppl_num])
    
    useEffect(() => {
        const target_condition = document.getElementById('condition3');
        if (game_num > 0) {       
            target_condition.style.color = `green`;
        } else {
            target_condition.style.color = `red`;
        }
    }, [game_num])
    
    useEffect(() => {
        const target_condition = document.getElementById('condition4');
        if (court_num !== 0 && ppl_num >= court_num * 4) {       
            target_condition.style.color = `green`;
        } else {
            target_condition.style.color = `red`;
        }
    }, [court_num, ppl_num])
    
    return (
        <BodyDiv>
            <h3><span>STEP1 </span>コート数を設定してください</h3>
            <ul onClick={handle_onclick_courts_num}>
                <li id="ppl_1">1</li>
                <li id="ppl_2">2</li>
                <li id="ppl_3">3</li>
                <li id="ppl_4">4</li>
            </ul>
            <h3><span>STEP2 </span>人数を設定してください</h3>
            <p><input type="number" name="" id="" placeholder="例) 8" onChange={on_change_ppl_num}/> 名</p>
            <h3><span>STEP3 </span>ゲーム数を設定してください</h3>
            <p><input type="number" name="" id="" placeholder="例) 10" onChange={on_chage_game_num}/> ゲーム</p>
            <h3><span>STEP4 </span>スタートボタンを押してください</h3>
            <p id="condition1">* コート数が正しくありません</p>
            <p id="condition2">* 人数が正しくありません</p>
            <p id="condition3">* ゲーム数が正しくありません</p>
            <p id="condition4">* コート数と人数が正しくありません<br></br>
                (人数はコート数の４倍以上になるべきです)
            </p>
            <button id="start_btn" type="button" onClick={handle_onclick_start_btn}>スタート</button>
        </BodyDiv>
    )
}

export default Body