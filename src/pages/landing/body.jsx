import { BodyDiv } from "./style";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Body() {
    
    const navigate = useNavigate();
    const [ court_num, set_court_num ] = useState('0');
    const [ ppl_num, on_change_ppl_num, set_ppl_num ] = useInput('0');

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

    const handle_onclick_start_btn = (e) => {
        if (Number(court_num) >= 1 && Number(ppl_num) >= 4) {
            console.log(`court_num : ${court_num}, ppl_num : ${ppl_num}`);
            navigate(`/courts`, {state : {court_num : court_num, ppl_num : ppl_num}});
        } else if (Number(court_num) < 1){
            alert('最低１コート以上入力してください');
        } else {
            alert('最低４人以上入力してください');
        }
        
    };

    useEffect(() => {
        const start_btn = document.getElementById('start_btn');
        if (Number(court_num) >= 1 && ppl_num >= 4) {
            start_btn.style.color = `#fff`;
            start_btn.style.backgroundColor = 'brown';
        } else {
            start_btn.style.color = `red`;
            start_btn.style.backgroundColor = `#fff`;
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
            <h3><span>STEP3 </span>スタートボタンを押してください</h3>
            <button id="start_btn" type="button" onClick={handle_onclick_start_btn}>スタート</button>
        </BodyDiv>
    )
}

export default Body