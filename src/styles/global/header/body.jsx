import { BodyDiv } from "./style";

function Body() {

    const handle_onclick_contact_logo = (e) => {
        console.log(e);
    }

    return (
        <BodyDiv>
            <div id="contact_logo" onClick={handle_onclick_contact_logo}></div>
        </BodyDiv>
    );
}

export default Body;