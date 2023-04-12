import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link href="/pages/Home.js">
                        <a className='navbar-link'>Home</a>
                    </Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/pages/Resources.js">
                        <a className='navbar-link'>Resources</a>
                    </Link>
                </li>
                <li className='navbar-item'>
                    <Link href="/pages/About.js">
                        <a className='navbar-link'>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar