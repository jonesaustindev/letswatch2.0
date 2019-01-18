import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorStyle = styled.div`
    padding: 1.5rem;
    margin: 2rem 0;
    border: 1px solid black;
    border-left: 4px solid red;
`;

const ShowError = ({ error }) => {
    if(!error || !error.message) return null;
    if(error.networkError && error.networkError.result && error.networkError.result.errors.length) {
        return error.networkError.results.errors.map((err, index) => (
            <ErrorStyle key={index}>
                <p data-test="graphql-error">
                    <strong>Oops!</strong>
                    {err.message.replace('GraphQL error: ', '')}
                </p>
            </ErrorStyle>
        ));
    }
    return (
        <ErrorStyle>
            <p data-test="graphql-error">
                <strong>Oops!</strong>
                {error.message.replace('GraphQL error: ', '')}
            </p>
        </ErrorStyle>
    );
}

ShowError.defaultProps = {
    error: {},
}

ShowError.propTypes = {
    error: PropTypes.object,
}

export default ShowError;