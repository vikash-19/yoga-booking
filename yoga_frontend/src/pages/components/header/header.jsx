import React from 'react'
import {Link} from 'react-router-dom'
import  styles from './header.module.scss'
function Header() {
  return (
    <nav className={styles.header}>
        <ul>
            <li><Link>About us</Link></li>
            <li><Link>Contacts</Link></li>
            <li className={styles.logout}><Link>Logout </Link></li>
        </ul>
    </nav>
  )
}

export default Header
