import React from 'react'
import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <p>Good People</p>
      {children}
    </div>
  )
}

export default Layout