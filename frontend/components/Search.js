import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import Results from './Results';

const SearchStyles = styled.div`
  position: relative;
  border-bottom: 1px solid lightgray;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 3vmin;
  }
`;

const SEARCH_MOVIE_QUERY = gql`
    query SEARCH_MOVIE_QUERY($search: String) {
        searchMovie(search: $search) {
            results {
                title
                poster_path
                overview
                release_date
                id
            }
        }
    }
`;

class Search extends Component {
    state = {
        movies: [],
        loading: false
    }

    onChange = debounce(async (e, client) => {
        this.setState({ loading: true });
        const res = await client.query({
            query: SEARCH_MOVIE_QUERY,
            variables: { search: e.target.value }
        })
        this.setState({
            movies: res.data.searchMovie.results,
            loading: false
        })
    }, 350);

    render() {
        const movies = this.state.movies;
        return (
            <React.Fragment>
                <SearchStyles>
                    <ApolloConsumer>
                        {client => (
                            <input
                                type="text"
                                placeholder="Search for a movie"
                                onChange={
                                    e => {
                                        e.persist();
                                        this.onChange(e, client);
                                    }
                                }
                            />
                        )}
                    </ApolloConsumer>
                </SearchStyles>
                <div>
                    <Results movies={movies} />
                </div>
            </React.Fragment>
        )
    }
}

export default Search;