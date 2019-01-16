import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import MovieCard from './MovieCard';

const POPULAR_QUERY = gql`
    query POPULAR_QUERY {
        popular {
            results {
                id
            }
        }
    }
`;

const PopularContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    .movie-grid {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

class Popular extends Component {
    render() {
        return (
            <Query
                query={POPULAR_QUERY}
            >
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    const results = data.popular.results;
                    return (
                        <PopularContainer>
                            <div className="movie-grid">
                                {results.slice(0, 8).map((movie, index) => {
                                    return (
                                        <MovieCard key={index} id={movie.id} />
                                    )
                                })}
                            </div>
                        </PopularContainer>
                    )
                }}
            </Query>
        )
    }
}

export default Popular;