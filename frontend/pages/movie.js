import MoviePage from '../components/MoviePage';

const Movie = props => (
    <div>
        <MoviePage id={props.query.id} />
    </div>
);

export default Movie;