import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CreateLike from './CreateLike';
import User from './User';
import PleaseSignIn from './PleaseSignin';
import AddToLikes from './AddToLikes';

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

const MoviePageContainer = styled.div`
    margin: 0;
    padding: 0;
`;

const MovieHeader = styled.div`
    color: white;
    p, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    h3 {
        font-size: 8vmin;
        line-height: 1.2;
    }
    h4 {
        font-size: 1.3rem;
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.offWhite};
    }
    .movie-content {
        margin: auto;
        max-width: ${props => props.theme.maxWidth};
        padding: 0.8em;
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
                    const backgroundUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

                    const backgroundStyle = {
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${backgroundUrl}'`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '750px'
                    }
                    return (
                        <MoviePageContainer>
                            <User>
                                {({ data: { me } }) => (
                                    <div>
                                        <MovieHeader>
                                            <div style={backgroundStyle}>
                                                <div className="header-content">
                                                    <div className="movie-content">
                                                        <h3>{movie.title}</h3>
                                                        <h4>User Rating <span>{movie.vote_average * 10}%</span></h4>
                                                        <p>{movie.runtime} minutes</p>
                                                        <p>{movie.release_date.slice(0, 4)}</p>
                                                        <div>
                                                            {/* Signed in */}
                                                            {me && (
                                                                <React.Fragment>
                                                                    <AddToLikes id={movie.id} />
                                                                </React.Fragment>
                                                            )}

                                                            {/* Logged out */}
                                                            {!me && (
                                                                <React.Fragment>
                                                                    <button>Like</button>
                                                                </React.Fragment>
                                                            )}
                                                        </div>
                                                        <p>{movie.overview}</p>
                                                        <li>{movie.poster_path} poster path</li>
                                                        <li>{movie.backdrop_path} backdrop path</li>
                                                    </div>

                                                </div>
                                            </div>
                                        </MovieHeader>
                                        <div>
                                            {movie.credits.cast.slice(0, 6).map((actor, index) => (
                                                <li key={index}>{actor.name}</li>
                                            ))}
                                        </div>

                                        <div>
                                            {movie.videos.results.map((video, index) => (
                                                <li key={index}>{video.name}</li>
                                            ))}
                                        </div>

                                        <div>
                                            {movie.images.backdrops.map((image, index) => (
                                                <li key={index}>{image.file_path}</li>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </User>
                        </MoviePageContainer>
                    );
                }}
            </Query>
        )
    }
}

export default MoviePage;
export { SINGLE_MOVIE_QUERY };