import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { USER_LIKES_QUERY } from './Likes';

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
                    { query: USER_LIKES_QUERY}
                ]}
            >
                {(signin, { error, loading }) => {
                    return (
                        <form 
                            method="post" 
                            onSubmit={async e => {
                                e.preventDefault();
                                await signin();
                                this.setState({ name: '', email: '', password: '' });
                            }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <h3>Sign In</h3>
                                <p>{error}</p>
                                <label htmlFor="email">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.saveToState}
                                    />
                                </label>
                                <label htmlFor="password">
                                    Password
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.saveToState}
                                    />
                                </label>
                                <button type="submit">Sign In</button>
                            </fieldset>
                        </form>
                    )
                }}
            </Mutation>
        )
    }
}

export default Signin;