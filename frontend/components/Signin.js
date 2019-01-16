import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';
import { USER_LIKES_QUERY } from './Likes';

const FormContainer = styled.div`
    form {
        max-width: ${props => props.theme.maxWidth};
        margin: auto;
        padding: 20px;
        color: ${props => props.theme.mainColor};
        text-align: center;
    }
    fieldset {
        border: 1px solid ${props => props.theme.mainColor};
    }
    input {
        border: 1px solid ${props => props.theme.mainColor};
    }
    button {
        background-color: white;
        padding: 1rem 2rem;
        margin-top: 20px;
        margin-bottom: 20px;
        color: ${props => props.theme.mainColor};
        border: 1px solid ${props => props.theme.mainColor};
        border-radius: 10px;
    }
    button:hover {
        background-color: ${props => props.theme.mainColor};
        color: white;
        cursor: pointer;
    }
`;

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($password: String!, $email: String!) {
        signin(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

class Signin extends Component {
    state = {
        name: '',
        password: '',
        email: '',
    }
    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Mutation
                mutation={SIGNIN_MUTATION}
                variables={this.state}
                refetchQueries={[
                    { query: CURRENT_USER_QUERY },
                    { query: USER_LIKES_QUERY }
                ]}
            >
                {(signin, { error, loading }) => {
                    return (
                        <FormContainer>
                            <form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault();
                                    await signin();
                                    this.setState({ name: '', email: '', password: '' });
                                    Router.back();
                                }}>
                                <fieldset disabled={loading} aria-busy={loading}>
                                    <h3>Sign In</h3>
                                    <p>{error}</p>
                                    <div className="input-field">
                                        <label htmlFor="email">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.saveToState}
                                            />
                                        </label>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="password">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.saveToState}
                                            />
                                        </label>
                                    </div>
                                    <button type="submit">Sign In</button>
                                </fieldset>
                            </form>
                        </FormContainer>
                    )
                }}
            </Mutation>
        )
    }
}

export default Signin;