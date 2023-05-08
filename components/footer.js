import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Copyright &copy; 2023 TeamEC, All rights reserved.</p>
          <div className="row">
              <div className="column">
                  <ul>
                      <li>
                          <Link href="/">
                              <p>Home</p>
                          </Link>
                      </li>
                      <li>
                          <Link href="/about">
                              <p>About</p>
                          </Link>
                      </li>
                      <li>
                          <Link href="/resources">
                              <p>Resources</p>
                          </Link>
                      </li>
                  </ul>
              </div>
              <div className="column">
                  <ul>
                      <li>
                          <Link href="/posts/privacy-policy">
                              <p>Privacy Policy</p>
                          </Link>
                      </li>
                      <li>
                          <Link href="/contact">
                              <p>Contact</p>
                          </Link>
                      </li>
                      <li>
                          <Link href="/services">
                              <p>Services</p>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </footer>
  )
}