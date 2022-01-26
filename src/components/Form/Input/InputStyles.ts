import styled from "styled-components";


export const StyledLabel = styled.label`
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
`;

export const StyledInput = styled.input<{ err: boolean }>`
        margin-top: 10px;
        padding: 20px;
        border-radius: var(--radius);
        background-color: var(--clr-input-bg);
        outline: none;
        border: ${({ err }) =>
		err
			? "1px solid var(--clr-error)"
			: "1px solid var(--clr-input-bg)"};
`;

