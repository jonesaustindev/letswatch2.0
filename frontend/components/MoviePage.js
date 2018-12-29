import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CreateLike from './CreateLike';
import PleaseSignIn from '../components/PleaseSignin';
import AddToLikes from '../components/AddToLikes';

const SINGLE_MOVIE_QUERY = gql`
    query SINGLE_MOVIE_QUERY($id: ID) {
        singleMovie(id: $id) {
            id
            poster_path
            backdrop_path
            overview
            release_date
            runtime
            title
            vote_average
            credits {
                cast {
                    name
                }
            }
            videos {
                results {
                    name
                    type
                }
            }
            images {
                backdrops {
                    file_path
                }
            }
        }
    }
`;

class MoviePage extends Component {
    render() {
        return (
            <Query query={SINGLE_MOVIE_QUERY} variables={{
                id: this.props.id
            }}>
                {({ error, loading, data }) => {
                    if (error) return <p>Error!</p>;
                    if (loading) return <p>Loading...</p>;
                    const movie = data.singleMovie;
                    return (
                        <div>
                            <h3>{movie.title}</h3>
                            <AddToLikes id={movie.id} />
                            <ul>
                                <li>{movie.vote_average} average</li>
                                <li>{movie.runtime} runtime</li>
                                <li>{movie.release_date} release date</li>
                                <li>{movie.overview}</li>
                                <li>{movie.poster_path} poster path</li>
                                <li>{movie.backdrop_path} backdrop path</li>
                            </ul>

                            <ul>
                                {movie.credits.cast.slice(0, 6).map((actor, index) => (
                                    <li key={index}>{actor.name}</li>
                                ))}
                            </ul>

                            <ul>
                                {movie.videos.results.map((video, index) => (
                                    <li key={index}>{video.name}</li>
                                ))}
                            </ul>

                            <ul>
                                {movie.images.backdrops.map((image, index) => (
                                    <li key={index}>{image.file_path}</li>
                                ))}
                            </ul>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default MoviePage;
export { SINGLE_MOVIE_QUERY };