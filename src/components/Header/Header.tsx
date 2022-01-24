import styled from "styled-components";

const HeaderWrapper = styled.div`
	padding: 40px 0 0 0;
	display: flex;
	justify-content: center;
`
const HeaderTitle = styled.p`
	font-size: var(--fz-bigger);
	font-weight: var(--fw-m);
	line-height: var(--lh-bigger);
` 

export const Header = ():JSX.Element => {
	return (
		<HeaderWrapper>
			<HeaderTitle> ONLY. </HeaderTitle>		
		</HeaderWrapper>
	)
}
