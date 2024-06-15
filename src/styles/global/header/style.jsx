import styled from "styled-components";
import contact_logo from "../../../assets/images/contact_logo.png";

export const BodyDiv = styled.div`
    div{
        width: 60%;
        height: 70px;
        margin: 0 auto;
        background-image: url(${contact_logo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`