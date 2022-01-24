import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFoundPageBg from "./img/Only_404.jpg";

const Wrapper = styled.div`
    height: 100%;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
`;

const ErrorContent = styled.div`
    flex: 1 0 auto;
`;

const ErrorText = styled.div`
    text-align: center;
    font-size: var(--fz-bigger);
    line-height: var(--lh-bigger);

	& span {
		animation: colchanger 1.5s infinite;
	}

	@keyframes colchanger {
    0% {
        color: #fa0101;
    }

    100% {
        color: rgba(128, 128, 128, 0.371);
    }
`;

const ToMainLink = styled(Link)`
	color: var(--clr-text);
	display: block;
	text-align: center;
    font-size: var(--fz-l);
    line-height: var(--lh-l);
	font-weight: var(--fw-m);
    text-decoration: none;
    transition: all 0.4s ease;
	position: relative;

	&:hover {
		transform: scale(0.9);
		text-decoration: underline;
		transform: translateX(-5px);
	}
	
	&:before {
        content: '⬅';
    }
`;

const Footer = styled.div`
    flex: 0 1 45%;
    position: relative;

    @media (max-width: 1024px) {
        flex: 0 1 35%;
    }

    @media (max-width: 768px) {
        flex: 0 1 20%;
    }

    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

export const NotFoundPage = (): JSX.Element => {
    return (
        <Wrapper>
            <ErrorContent>
                <ErrorText>
                    Ooops <br /> <span>404</span>
                </ErrorText>
                <ToMainLink to={localStorage.auth ? '/profile' : '/'}> Ha главную </ToMainLink>
            </ErrorContent>

            <Footer>
                <img src={NotFoundPageBg} alt='' />
            </Footer>
        </Wrapper>
    );
};
