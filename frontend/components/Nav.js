import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/movie'>
            <a>Movie</a>
        </Link>
    </div>
)

export default Nav;