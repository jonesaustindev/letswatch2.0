import Link from 'next/link';
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
        {({ data: { me } }) => (
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>

                {/* Signed in */}
                {me && (
                    <React.Fragment>
                        <Link href='/likes'>
                            <a>View Likes</a>
                        </Link>
                        <Signout />
                    </React.Fragment>
                )}

                {/* Logged out */}
                {!me && (
                    <React.Fragment>
                        <Link href='/signup'>
                            <a>Signup</a>
                        </Link>
                        <Link href='/signin'>
                            <a>Log In</a>
                        </Link>
                    </React.Fragment>
                )}
            </div>
        )}
    </User>
)

export default Nav;