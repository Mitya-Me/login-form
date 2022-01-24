import styled from 'styled-components'
import { ReactComponent as AlertIcon} from './alert.svg'

const ErrorWrapper = styled.div`
	display: flex;
	position: absolute;
	margin-top: -75px;
	width: 640px;
	align-items: center;
	background-color: var(--clr-error-bg);
	border: 1px solid var(--clr-error);
	border-radius: var(--radius);
	padding: 20px;
	margin-bottom: 27px;
`

const ErrorText = styled.p`
	font-size: var(--fz-s);
	line-height: var(--lh-s);
	display: inline-block;
	padding-left: 14px;
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
