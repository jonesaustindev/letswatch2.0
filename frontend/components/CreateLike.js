import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_LIKE_MUTATION = gql`
    mutation CREATE_LIKE_MUTATION($movieId: String) {
        createLike(
            movieId: $movieId
        ) {
            id
        }
    }
`;

class CreateLike extends Component {
    render() {
        const movieId = this.props.movieId;
        return (
            <Mutation
                mutation={CREATE_LIKE_MUTATION}
                variables={movieId}
            >
                {(createLike, { loading, error }) => (
                    <button onClick={createLike}>Like {movieId}</button>
                )}
            </Mutation>
        )
    }
}

export default CreateLike;
export { CREATE_LIKE_MUTATION };