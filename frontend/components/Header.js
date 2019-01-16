import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Nav from './Nav';


Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}

const StyledHeader = styled.header`
    img {
        width: 300px;
        margin: auto;
    }
    .bar {
        border-bottom: 1px solid black;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-between;
        justify-items: right;
        align-items: stretch;
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid lightgray;
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <img src="/static/logo_transparent.png" />
            <Nav />
        </div>
    </StyledHeader>
);

export default Header;