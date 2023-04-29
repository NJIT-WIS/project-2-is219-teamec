import Link from 'next/link';
import styles from '/components/nav.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link className={styles.navbarTitle} href="Home/">MyWebClass</Link>
        </div>

        <div className="flex items-center">
          <ul className={styles.navbarList}>
            <li>
                <Link className={styles.navbarLink} href="Resources/">Resources</Link>
            </li>
            <li>
                <Link className={styles.navbarLink} href="Services/">Services</Link>
            </li>
            <li>
                <Link className={styles.navbarLink} href="About/">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;