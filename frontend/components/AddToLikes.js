import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { USER_LIKES_QUERY } from './Likes';

const ADD_TO_LIKES_MUTATION = gql`
    mutation addToLikes($like: String!) {
        addToLikes(like: $like) {
            id
        }
    }
`;

class AddToLikes extends Component {
    render() {
        const { id } = this.props;
        return (
            <Mutation 
                mutation={ADD_TO_LIKES_MUTATION} 
                variables={{ like: id }}
                refetchQueries={[{ query: USER_LIKES_QUERY }]}
            >
                {addToLikes => (
                    <button onClick={addToLikes}>Like</button>
                )}
            </Mutation>
        )
    }
}

export default AddToLikes;