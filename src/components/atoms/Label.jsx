import styled from "styled-components";

const LabelStyled = styled.label`
    display: block;
    font-size: 18px;
    color: #0308a3;
    margin-bottom: 5px;
`;

function Label(props) {

    return (
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;