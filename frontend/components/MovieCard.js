import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
    position: relative;
    max-height: 445px;
    width: 300px;
    overflow: hidden;
    background: #000;
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

    .movie-details {
        position: absolute;
        padding: 20px;
        width: 100%;
        height: 100%;
        bottom: -450px;
        left: 0;
        box-sizing: border-box;
        transition: 0.7s;
        z-index: 2;
        color: #f7f7f7;
    }

    .movie-card:hover .movie-details {
        bottom: 0;
    }

    .movie-details h3 {
        margin: 0;
        padding: 0;
        padding-bottom: 5px;
        font-size: 1.2rem;
        font-weight: 700;
    }

    .movie-details h5 {
        font-size: 1.1rem;
    }

    .movie-details h6 {
        font-size: 1rem;
    }

    .movie-card p {
        font-size: 0.9rem;
    }

    .movie-card-overview {
        padding-top: 18px;
    }

    .movie-card-overview p {
        margin-bottom: 2px;
    }

    .view-more {
        text-decoration: none;
        color: #f7f7f7;
    }

    .view-more:hover {
        color: #f7f7f7;
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
                                        <Link href={{ pathname: '/movie', query: { id: movie.id } }}>
                                            <a>View More</a>
                                        </Link>
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

