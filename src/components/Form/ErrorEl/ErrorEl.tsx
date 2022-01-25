import styled from 'styled-components'
import { ReactComponent as AlertIcon} from './alert.svg'

const ErrorWrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--clr-error-bg);
	border: 1px solid var(--clr-error);
	border-radius: var(--radius);
	padding: 20px;
	margin-bottom: 27px;

	@media (max-width: 470px) {
		padding: 10px;
	}
`

const ErrorText = styled.p`
	font-size: var(--fz-s);
	line-height: var(--lh-s);
	padding-left: 14px;
	width: 80%;
	
	@media (max-width: 768px) {
		padding-left: 5px;
		text-align: center;
	}
`;


interface ErrorElProps {
	errElMsg: string;
	errElEmail?: string
}

export const ErrorEl = ({errElMsg ,errElEmail}:ErrorElProps):JSX.Element => { 
	return (
		<ErrorWrapper>
			<AlertIcon />
			<ErrorText>
				{errElMsg
					? 'Неверно указан логин или пароль'
					: `Пользователя ${errElEmail} не существует` 
				}
			</ErrorText>
		</ErrorWrapper>
	)
}
