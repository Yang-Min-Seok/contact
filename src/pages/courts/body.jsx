import { BodyDiv } from "./style";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Body() {
    
    const location = useLocation();
    const court_num = location.state.court_num;
    const ppl_num = location.state.ppl_num;
    console.log(`court num : ${court_num} ppl num : ${ppl_num}`);

    const make_table_frame = (court_num) => {
        const table_head = document.getElementById('table').children[0];
        table_head.innerHTML = ``;
        for (let i = 1; i <= court_num; i++) {
            const prev_head = table_head.innerHTML;
            table_head.innerHTML = prev_head + `
                <th>Court ${i}</th>
            `
        }

        for (let i = 1; i < 16; i++) {
            const table_body = document.getElementById('table').children[i];
            table_body.innerHTML = ``;
            for (let j = 0; j < court_num; j++) {
                const prev_body = table_body.innerHTML;
                table_body.innerHTML = prev_body + `
                    <td>dum data</td>
                `
            }
        }
        
    }

    useEffect(() => {
        make_table_frame(court_num);
    }, [])

    return (
        <BodyDiv>
            <table id="table">
                {/* header */}
                <tr></tr>
                {/* content */}
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </table>
            <div>
                <p>Prev</p>
                <p>Next</p>
            </div>
            <p>Exit</p>
        </BodyDiv>
    )
}

export default Body