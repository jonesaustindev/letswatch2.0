import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    padding: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    .img {
        width: 100%;
    }
    .card-text {
        margin-top: 10px;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .character {
        font-size: 1rem;
    }
`;

const ActorCard = ({ actor }) => {
    const actorPicture = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
    return (
        <Card>
            <img src={actorPicture} alt={actor.name} />
            <div className="card-text">
                <p className="actor">{actor.name}</p>
                <p className="character">{actor.character}</p>
            </div>
        </Card>
    )
}

export default ActorCard;