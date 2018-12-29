import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Card = styled.div`
    max-height: 445px;
    width: 300px;
    overflow: hidden;
    box-shadow: ${props => props.theme.boxShadow};
    margin-top: 20px;
    margin-bottom: 20px;

    .movie-card .poster {
        position: relative;
        overflow: hidden;
    }

    .movie-card .poster:before {
        position: absolute;
        content: '';
        bottom: -300px;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #000 40%, transparent);
        transition: 0.5s;
        z-index: 1;
    }

    .movie-card:hover .poster:before {
        bottom: 0;
    }

    .movie-card .poster img {
        width: 100%;
        transition: 0.5s;
    }

    .movie-card:hover .poster img {
        filter: blur(2px);
        transform: translateY(-40px);
    }
`;

const MOVIE_CARD_QUERY = gql`
    query MOVIE_CARD_QUERY($id: ID) {
        singleMovie(id: $id) {
            id
            poster_path
            overview
            release_date
            title
            vote_average
        }
    }
`;

class MovieCard extends Component {
    render() {
        return (
            <Query
                query={MOVIE_CARD_QUERY}
                variables={{
                    id: this.props.id
                }}
            >
                {({ error, loading, data }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error}</p>

                    const movie = data.singleMovie;
                    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
                    const overview = movie.overview.substring(0, 100) + '...';

                    return (
                        <Card>
                            <div className="movie-card">
                                <div className="poster"><img alt="movie-poster" src={posterUrl} /></div>
                                <div className="movie-details">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <h5 className="card-text">User Rating {movie.vote_average * 10}%</h5>
                                    <h6 className="card-text">
                                        <p>{movie.release_date.slice(0, 4)}</p>
                                    </h6>
                                    <div className="movie-card-overview">
                                        <p>{overview}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                }}
            </Query>
        )
    }
}

export default MovieCard;

