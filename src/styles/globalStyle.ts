import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
  		margin: 0;
  		border: 0;
	}

	:root {
		--ff-prime: 'Helvetica Neue', sans-serif;

		--fs-s: 16px;
		--fs-m: 18px;
		
		--fw-s: 600;
		--fw-l: 800; 

		--lh-s: 19px;
		--lh-m: 22px;

		--clr-bg: #E5E5E5;
		--clr-input-bg: #F5F5F5;
		--clr-btn-prime: #4A67FF;
		--clr-btn-prime-hover: #3355FF;

		--radius: 8px;
	}

	body {
		font-family: var(--ff-prime);
		font-size: var(--fs-s);
		line-height: var(--lh-s);
	}

	input,
	button,
	textarea {
		font-family: inherit;
	}

	button {
		cursor: pointer;
	}

	ul li {
  		list-style: none;
	}
`;
