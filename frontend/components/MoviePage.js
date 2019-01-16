import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import User from './User';
import AddToLikes from './AddToLikes';
import ActorCard from './ActorCard';
import MovieImage from './MovieImage';
import MovieVideos from './MovieVideos';

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
                    character
                    profile_path
                }
            }
            videos {
                results {
                    name
                    type
                    key
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
    position: relative;
    color: white;
    p, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    h3 {
        font-size: 8vmin;
        line-height: 1.2;
        margin-bottom: 60px;
    }
    h4 {
        font-size: 1.3rem;
    }
    p {
        font-size: 1rem;
        padding-top: 1em;
        color: ${props => props.theme.offWhite};
    }
    .movie-content {
        margin: auto;
        max-width: ${props => props.theme.maxWidth};
        padding: 0.8em;
    }
    .overview-container p {
        line-height: 1.5rem;
        font-size: 1.3rem;
    }
    .video-player {
        width: 200px;
    }
    .like-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 25px;
        margin-bottom: 10px;
        padding: 1.5em;
    }
    .unliked {
        color: white;
        a:hover {
            cursor: pointer;
        }
    }
    #full-overview {
        margin-top: 100px;
    }
    @media(max-width: ${props => props.theme.smallBreak}) {
        #full-overview {
            margin-top: 50px;
            font-size: 0.9rem;
        }
        .like-button {
            left: 0;
        }
    }
    @media(min-width: ${props => props.theme.smallBreak}) {
        .short-overview {
            display: none;
        }
    }
`;

const MovieBody = styled.div`
    background: white;
`;

const ActorContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    .actor-grid {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        padding: 20px;
    }
    h3 {
        font-size: 6.5vmin;
        text-align: center;
        padding-top: 50px;
        margin: 0;
        color: ${props => props.theme.mainColor};
    }
`;

const HR = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    margin-top: 80px;
    margin-bottom: 80px;
`;

const ImagesContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    .images-grid {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        padding: 20px;
    }
    margin-bottom: 50px;
`;

const VideosContainer = styled.div`
    max-width: 640px;
    margin: auto;
    .video-grid {
        @media(max-width: ${props => props.theme.smallBreak}) {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }
        display: grid;
        grid-gap: 10px;
        padding: 10px;
    }
`;

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
                    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

                    const backgroundStyle = {
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${backgroundUrl}'`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '750px'
                    }

                    const opts = {
                        width: 'auto'
                    };

                    const [videos] = movie.videos.results;
                    const trailer = videos.type.includes('Trailer');
                    console.log(trailer);

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
                                                        <p className="release-date">{movie.release_date.slice(0, 4)}</p>
                                                        <p id="full-overview">{movie.overview}</p>
                                                    </div>
                                                </div>

                                                <div className="like-button">
                                                    {/* Signed in */}
                                                    {me && (
                                                        <React.Fragment>
                                                            <AddToLikes id={movie.id} />
                                                        </React.Fragment>
                                                    )}

                                                    {/* Logged out */}
                                                    {!me && (
                                                        <React.Fragment>
                                                            <NotLikedBtn>
                                                                <Link href="signin">
                                                                    <a className="unliked"><i class="far fa-heart"></i></a>
                                                                </Link>
                                                            </NotLikedBtn>
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            </div>
                                        </MovieHeader>
                                        <MovieBody>
                                            <ActorContainer>
                                                <h3>Top Billed Cast</h3>
                                                <div className="actor-grid">
                                                    {movie.credits.cast.slice(0, 4).map((actor, index) => (
                                                        <ActorCard key={index} actor={actor} />
                                                    ))}
                                                </div>
                                            </ActorContainer>

                                            <HR />

                                            <ImagesContainer>
                                                <div className="images-grid">
                                                    {movie.images.backdrops.slice(0, 10).map((image, index) => (
                                                        <MovieImage key={index} image={image} />
                                                    ))}
                                                </div>
                                            </ImagesContainer>

                                            <VideosContainer>
                                                <div className="video-grid">
                                                    {movie.videos.results.slice(0, 1).map((video, index) => (
                                                        <MovieVideos key={index} video={video} />
                                                    ))}
                                                </div>
                                            </VideosContainer>
                                        </MovieBody>
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