import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Header from './Header';

const theme = {
    maxWidth: '1200px',
    boxShadow: '0 12px 25px 0 rgba(0,0,0,0.095)',
    bigBreak: '1500px',
    offWhite: '#efefef',
    mainGradient: 'linear-gradient(to right bottom, #7e2c22, #832e23, #892f25, #8e3126, #943328, #9b382a, #a23c2b, #a9412d, #b34a2f, #bd5332, #c75c34, #d16536);'
};

injectGlobal`
    html {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    a {
        text-decoration: none;
    }
`;

const StyledPage = styled.div`
    background: white;
    color: black;
`;

const Inner = styled.div`
    margin: 0 auto;
    padding-top: 0;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;