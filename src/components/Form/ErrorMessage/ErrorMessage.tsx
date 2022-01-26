import styled from "styled-components";


const Error = styled.div`
font-size: var(--fz-s);
line-height: var(--lh-s);
margin-top: 8px;
color: var(--clr-error);
`;

interface IErrorMessage { 
	errorText: string;
}

export const ErrorMessage = ({errorText}: IErrorMessage) => (
	<Error>{errorText}</Error>
) 