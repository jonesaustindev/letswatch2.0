import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { USER_LIKES_QUERY } from './Likes';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;

const Signout = props => (
    <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[
            { query: CURRENT_USER_QUERY },
            { query: USER_LIKES_QUERY}
        ]}
    >
        {signout => (
            <button onClick={signout}>Sign Out</button>
        )}
    </Mutation>
)

export default Signout;