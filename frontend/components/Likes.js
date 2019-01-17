import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PleaseSignIn from '../components/PleaseSignin';
import MovieCard from './MovieCard';

const USER_LIKES_QUERY = gql`
    query USER_LIKES_QUERY {
        likeListItems {
            id
            like
        }
    }
`;

const LikesContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    h4 {
        color: ${props => props.theme.mainColor};
        padding: 20px;
    }
    .actor-grid {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        padding: 20px;
    }
`;

class Likes extends Component {
    render() {
        return (
            <div>
                <PleaseSignIn>
                    <Query
                        query={USER_LIKES_QUERY}
                    >
                        {({ data, loading, error }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            const likedMovies = data.likeListItems;
                            return (
                                <div>
                                    <LikesContainer>
                                        <h4>Your Liked Movies</h4>
                                        <div className="actor-grid">
                                            {likedMovies.map((movie, index) => {
                                                return (
                                                    <MovieCard key={index} id={movie.like} />
                                                )
                                            })}
                                        </div>
                                    </LikesContainer>
                                </div>
                            )
                        }}
                    </Query>
                </PleaseSignIn>
            </div>
        )
    }
}

export default Likes;
export { USER_LIKES_QUERY };