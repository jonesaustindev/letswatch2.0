import styled from 'styled-components';
import MovieCard from './MovieCard';

const ResultsContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    .movie-grid {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        padding: 20px;
    }
`;

const Results = props => {
    console.log(props);
    if (props.movies === null) {
        return <div></div>
    }
    if (props.movies.length > 1) {
        return (
            <ResultsContainer>
                <div className="movie-grid">
                    {
                        props.movies.map((movie, index) => {
                            return (
                                <MovieCard key={index} id={movie.id} />
                            )
                        })
                    }
                </div>
            </ResultsContainer>
        )
    }
    return <div></div>
}

export default Results;