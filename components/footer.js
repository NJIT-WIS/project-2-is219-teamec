import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2023 TeamEC, All rights reserved.</p>
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

//<table>
//                <tr>
//                    <td><a href='Home'>Home</a></td>
//                    <td>ㅤㅤ</td>
//                    <td><a href='Privacy'>Privacy Policy</a></td>
//                </tr>
//                <tr>
//                    <td><a href='Blog'>Blog</a></td>
//                    <td>ㅤㅤ</td>
//                    <td><a href='Contact'>Contact Us</a></td>
//                </tr>
//                <tr>
//                    <td><a href='Resources'>Resources</a></td>
//                    <td>ㅤㅤ</td>
//                    <td><a href='About'>About</a></td>
//                </tr>
//          </table>