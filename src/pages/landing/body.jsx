import { BodyDiv } from "./style";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Body() {
    
    const navigate = useNavigate();
    const [ court_num, set_court_num ] = useState('0');
    const [ ppl_num, on_change_ppl_num, set_ppl_num ] = useInput('0');

    const handle_onclick_courts_num = (e) => {
        set_court_num(e.target.innerText);
    };

    const handle_onclick_start_btn = (e) => {
        console.log(court_num, ppl_num);
        navigate(`/courts`, {state : {court_num : court_num, ppl_num : ppl_num}});
    };

    return (
        <BodyDiv>
            <h3><span>STEP1 </span>コート数を設定してください</h3>
            <ul onClick={handle_onclick_courts_num}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <h3><span>STEP2 </span>人数を設定してください</h3>
            <p><input type="number" name="" id="" placeholder="例) 8" onChange={on_change_ppl_num}/> 名</p>
            <h3><span>STEP3 </span>スタートボタンを押してください</h3>
            <button type="button" onClick={handle_onclick_start_btn}>スタート</button>
        </BodyDiv>
    )
}

export default Body