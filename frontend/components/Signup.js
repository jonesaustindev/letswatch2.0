import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';
import { USER_LIKES_QUERY } from './Likes';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($name: String!, $password: String!, $email: String!) {
        signup(name: $name, email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

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

class Signup extends Component {
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
                mutation={SIGNUP_MUTATION}
                variables={this.state}
                refetchQueries={[
                    { query: CURRENT_USER_QUERY },
                    { query: USER_LIKES_QUERY }
                ]}
            >
                {(signup, { error, loading }) => {
                    return (
                        <FormContainer>
                            <form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault();
                                    await signup();
                                    this.setState({ name: '', email: '', password: '' });
                                }}>
                                <fieldset disabled={loading} aria-busy={loading}>
                                    <h3>Sign Up For an Account</h3>
                                    <Error error={error} />
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
                                        <label htmlFor="name">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={this.state.name}
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
                                    <button type="submit">Sign Up</button>
                                </fieldset>
                            </form>
                        </FormContainer>
                    )
                }}
            </Mutation>
        )
    }
}

export default Signup;