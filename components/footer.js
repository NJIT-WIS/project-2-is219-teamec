// components/Footer.js

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 TeamEC, All rights reserved.</p>
          <table>
              <tr>
                  <td><a href="#">Home</a></td>
                  <td><a href="#">Privacy Policy</a></td>
              </tr>
        </table>
      </div>
    </footer>
  )
}

//<tr>
//             <td>
//               <ul className={styles.footerLinks}>
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Resources</a>
//                 </li>
//               </ul>
//             </td>
//             <td>
//               <ul className={styles.footerLinks}>
//                 <li>
//                   <a href="#">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact Us</a>
//                 </li>
//                 <li>
//                   <a href="#">About</a>
//                 </li>
//               </ul>
//             </td>
//           </tr>

//<table>
//               <tr>
//                   <td><a href="#">Home</a></td>
//                   <td><a href="#">Privacy Policy</a></td>
//               </tr>
//               <tr>
//                   <td><a href="#">Blog</a></td>
//                   <td><a href="#">Contact Us</a></td>
//               </tr>
//               <tr>
//                   <td><a href="#">Resources</a></td>
//                   <td><a href="#">About</a></td>
//               </tr>
//         </table>