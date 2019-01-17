import Link from 'next/link';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { USER_LIKES_QUERY } from './Likes';
import User from './User';

const NavStyle = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: start;
    a, button {
        padding: 1rem 2rem;
        color: ${props => props.theme.mainColor};
        display: flex;
        align-items: center;
        position: relative;
        text-transform: uppercase;
        font-size: 3vmin;
        background: none;
        cursor: pointer;
    }
    button {
        border:none; 
        font: inherit;
        cursor: pointer;
        font-size: 3vmin;
    }
    a:hover {
        text-decoration-color: ${props => props.theme.mainColor};
        text-decoration: underline;
    }
    button:hover {
        text-decoration-color: ${props => props.theme.mainColor};
        text-decoration: underline;
    }
    @media(max-width: ${props => props.theme.smallBreak}) {
        a, button {
            padding: 0.5rem 1rem;
        }
    }
`;


const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;

const Nav = () => (
    <User>
        {({ data: { me } }) => (
            <NavStyle>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/search'>
                    <a>Search</a>
                </Link>

                {/* Signed in */}
                {me && (
                    <React.Fragment>
                        <Link href='/likes'>
                            <a>View Likes</a>
                        </Link>
                        <Mutation
                            mutation={SIGN_OUT_MUTATION}
                            refetchQueries={[
                                { query: CURRENT_USER_QUERY },
                                { query: USER_LIKES_QUERY }
                            ]}
                        >
                            {signout => (
                                <button onClick={signout}>Sign Out</button>
                            )}
                        </Mutation>
                    </React.Fragment>
                )}

                {/* Logged out */}
                {!me && (
                    <React.Fragment>
                        <Link href='/signup'>
                            <a>Signup</a>
                        </Link>
                        <Link href='/signin'>
                            <a>Log In</a>
                        </Link>
                    </React.Fragment>
                )}
            </NavStyle>
        )}
    </User>
)

export default Nav;