import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { USER_LIKES_QUERY } from './Likes';

const DELETE_LIKE_MUTATION = gql`
    mutation DELETE_LIKE_MUTATION($id: ID!) {
        deleteLikeListItem(id: $id) {
            id
        }
    }
`;

const RemoveButton = styled.a`
    color: red;
    padding: 15px;
    i {
        font-size: 1.5rem;
    }
    i:hover {
        cursor: pointer;
    }
    border: 1.5px solid white;
    border-radius: 50%;
`;

class RemoveLike extends Component {
    render() {
        const data = this.props.data;
        const likedMovies = data.likeListItems;
        const checkedLikes = likedMovies.find(like => {
            return like.like === this.props.id;
        })
        return (
            <Mutation
                mutation={DELETE_LIKE_MUTATION}
                variables={{ id: checkedLikes.id }}
                refetchQueries={[{ query: USER_LIKES_QUERY }]}
            >
                {(deleteLikeListItem, { error }) => {
                    return (
                        <RemoveButton onClick={deleteLikeListItem}>
                            <i class="fas fa-heart"></i>
                        </RemoveButton>
                    )
                }}
            </Mutation>
        )
    }
}

export default RemoveLike;