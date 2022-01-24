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


		--fz-s: 14px;
		--fz-m: 16px;
		--fz-l: 18px;
		--fz-xl: 40px;
		--fz-bigger: 64px;

		--fw-s: 400;
		--fw-m: 700; 
		--fw-l: 800;

		--lh-s: 17px;
		--lh-m: 19px;
		--lh-l: 22px;
		--lh-xl: 48px;
		--lh-bigger: 78px;

		--clr-text: #000000;
		--clr-bg: #E5E5E5;
		--clr-input-bg: #F5F5F5;
		--clr-btn-prime: #4A67FF;
		--clr-btn-prime-hover: #3355FF;
		--clr-btn-prime-dis: #99A9FF;
		--clr-error: #E26F6F;
		--clr-error-bg: #F5E9E9;

		--radius: 8px;
	}

	body {
		font-family: var(--ff-prime);
		font-size: var(--fz-m);
		line-height: var(--lh-l);
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
