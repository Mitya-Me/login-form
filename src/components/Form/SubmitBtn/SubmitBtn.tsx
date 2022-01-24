import styled from "styled-components";

const SubmitInput = styled.input`
    text-align: center;
    padding: 20px;
    color: white;
    font-size: var(--fz-l);
    margin-top: 60px;
    background-color: var(--clr-btn-prime);
    border-radius: var(--radius);
    cursor: pointer;

    &:hover {
        background-color: var(--clr-btn-prime-hover);
    }

    &[disabled],
    &[disabled]:hover {
        background-color: var(--clr-btn-prime-dis);
        cursor: default;
    }
`;

interface ISubmitBtn { 
	disValue: boolean
}

export const SubmitBtn = ({disValue=true}: ISubmitBtn):JSX.Element => { 
	return <SubmitInput type='submit' disabled={disValue} />
}