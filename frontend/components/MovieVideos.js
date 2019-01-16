import styled from 'styled-components';
import YouTube from 'react-youtube';

const opts = {
    maxHeight: '480px',
    width: '100%'
}

const MovieVideos = ({ video }) => {
    return (
        <YouTube
            videoId={video.key}
            opts={opts}
        />
    )
}

export default MovieVideos;