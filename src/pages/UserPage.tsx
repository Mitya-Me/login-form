import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const WelcomeText = styled.h2`
	font-size: var(--fz-xl);
	line-height: var(--lh-xl);
	margin-bottom: 50px;
	
	& span {
		font-weight: var(--fw-l);
	}

	@media (max-width: 1024px) {
		font-size: var(--fz-l);
		text-align: center;
	}
`

const ExitButton = styled.button`
	display: inline-block;
	padding: 20px 70px;

	font-size: var(--fz-l);
	font-weight: var(--fw-l);
	background-color: var(--clr-input-bg);
	border-radius: var(--radius);
	transition: all .4s ease;
	
	&:hover {
		background-color: lightgray;
		color: white;
	}
`


export const UserPage = () => {
	const history = useHistory();
	const { setAuth } = useContext(AuthContext);

	const logOff = () => { 
		setAuth && setAuth(false)
		localStorage.removeItem('auth')
		history.push('/')
	}

	return <Wrapper>
		<WelcomeText>
			Здравствуйте, <span>{localStorage.getItem('login')}</span>
		</WelcomeText>
		<ExitButton onClick={logOff}> Выйти </ExitButton>
	</Wrapper>
}