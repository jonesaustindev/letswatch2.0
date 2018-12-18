import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const POPULAR_QUERY = gql`
    query POPULAR_QUERY {
        popular {
            results {
                title
                id
                poster_path
            }
        }
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
                        <div>
                            {results.slice(0, 8).map((movie, index) => {
                                return (
                                    <ul>
                                        <li key={index}>{movie.title}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Popular;