import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`

interface ContainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    	children: ReactNode;
}

export const Container = ({children}:ContainerProps):JSX.Element => { 
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}