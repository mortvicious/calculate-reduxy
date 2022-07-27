import React, {FC} from 'react'
import styles from './Header.module.scss'
const Header:FC = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['logo-container']}>
        <h3 className={styles['logo']}>Calculate Reduxy</h3>
        <span className={styles['hidden-txt']}>With Typescript flavour</span>
      </div>
    </div>
  )
}


export default Header