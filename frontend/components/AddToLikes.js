import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { USER_LIKES_QUERY } from './Likes';
import RemoveLike from './RemoveLike';

const NotLikedBtn = styled.a`
    color: white;
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
                    <Query
                        query={USER_LIKES_QUERY}
                    >
                        {({ data }) => {
                            const movieId = id.toString();
                            const currentUserLikes = data.likeListItems.map((movie) => {
                                return movie.like
                            });
                            const checkedLikes = currentUserLikes.includes(movieId);
                            
                            if(checkedLikes == false) {
                                return <NotLikedBtn onClick={addToLikes}><i class="far fa-heart"></i></NotLikedBtn>
                            }
                            
                            if(checkedLikes == true) {
                                return <RemoveLike data={data} id={id} />
                            }
                        }}
                    </Query>
                )}
            </Mutation>
        )
    }
}

export default AddToLikes;