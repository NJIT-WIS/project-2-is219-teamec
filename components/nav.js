import Link from 'next/link'
import styles from '/components/nav.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <li className={styles.navbar_item}>
                    <Link className={styles.navbar_link} href="Home/">Home</Link>
                </li>
                <li className={styles.navbar_item}>
                    <Link className={styles.navbar_link} href="Resources/">Resources</Link>
                </li>
                <li className={styles.navbar_item}>
                    <Link className={styles.navbar_link} href="About/">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar