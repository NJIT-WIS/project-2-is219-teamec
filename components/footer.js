// components/Footer.js

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 TeamEC, All rights reserved.</p>
        <table>
               <tr>
                   <td><a href='Home'>Home</a></td>
                   <td>ㅤㅤ</td>
                   <td><a href='Privacy'>Privacy Policy</a></td>
               </tr>
               <tr>
                   <td><a href='Blog'>Blog</a></td>
                   <td>ㅤㅤ</td>
                   <td><a href='Contact'>Contact Us</a></td>
               </tr>
               <tr>
                   <td><a href='Resources'>Resources</a></td>
                   <td>ㅤㅤ</td>
                   <td><a href='About'>About</a></td>
               </tr>
         </table>
      </div>
    </footer>
  )
}

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