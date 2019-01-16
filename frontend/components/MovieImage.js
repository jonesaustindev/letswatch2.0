import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
`;

const MovieImage = ({ image }) => {
    const img = `https://image.tmdb.org/t/p/w500/${image.file_path}`;
    return(
        <Image src={img} />
    )
}

export default MovieImage;