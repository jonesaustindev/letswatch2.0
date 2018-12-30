import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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
                                    <h3>Likes</h3>

                                    <div>
                                        {likedMovies.map((movie, index) => {
                                            return (
                                                <MovieCard key={index} id={movie.like} />
                                            )
                                        })}
                                    </div>
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