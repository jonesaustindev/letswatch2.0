import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const NOW_PLAYING_QUERY = gql`
    query NOW_PLAYING_QUERY {
        nowPlaying {
            results {
                title
                id
                backdrop_path
            }
        }
    }
`;

const Gallery = styled.div`
    .gallery {
        grid-column: 1 / span 3;
        box-shadow: ${props => props.theme.boxShadow};
        display: grid;
        grid-gap: 0;
        line-height: 0;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 150px;
    }
    @media screen and (max-width: ${props => props.theme.maxWidth}) {
        .gallery {
            grid-column: 1 / span 5;
        }
    }
    .item {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 1;
        margin-bottom: 0;
    }
    .item img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .item__overlay {
        background: #c6e0ff42;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        position: relative;
        display: grid;
        justify-items: center;
        align-items: center;
        transition: 0.2s;
        transform: translateY(100%);
        }

    .item__overlay a {
        font-size: 12px;
        background: none;
        border: 2px solid #f7f7f7;
        color: #f7f7f7;
        text-transform: uppercase;
        background: (rgba(0, 0, 0, 0.7));
        padding: 10px;
    }

    .item__overlay button:hover {
        cursor: pointer;
    }

    .item:hover .item__overlay {
        transform: translateY(0);
    }

    .item1 {
        grid-row: span 4;
        grid-column: span 3;
    }

    .item2 {
        grid-row: span 2;
        grid-column: span 2;
    }

    .item3 {
        grid-row: span 2;
        grid-column: span 1;
    }

    .item4 {
        grid-row: span 1;
        grid-column: span 1;
    }

    .item5 {
        grid-row: span 1;
        grid-column: span 1;
    }

    @media screen and (max-width: 768px) {
        .item1, .item2, .item3, .item4, .item5 {
            grid-row: span 2;
            grid-column: span 5;
        } 
    }
`;

class NowPlaying extends Component {
    randomNumber() {
        return Math.floor(Math.random() * 4) + 1;
    }
    render() {
        return (
            <Query
                query={NOW_PLAYING_QUERY}
            >
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    const results = data.nowPlaying.results;
                    return (
                        <Gallery>
                            <div className="gallery">
                                {results.slice(0, 5).map((movie, index) => {
                                    const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
                                    return (
                                        <div key={index} className={`item item${index + 1} h${this.randomNumber()} v${this.randomNumber()}`}>
                                            <img alt={movie.title} src={backdrop} />
                                            <div className="item__overlay">
                                                <Link href={{ pathname: '/movie', query: { id: movie.id } }}>
                                                    <a>View More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Gallery>
                    )
                }}
            </Query>
        )
    }
}

export default NowPlaying;