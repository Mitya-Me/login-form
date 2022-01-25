import { Form } from '../components/'
import styled from 'styled-components'

const LoginWrapper = styled.section`
	height: 100%;
	padding-top: 10%;

	display: flex;
	justify-content: center;
`

export const Login = ():JSX.Element => { 
	return (
		<LoginWrapper>
			<Form />
		</LoginWrapper>
	) 
}