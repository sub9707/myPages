import React from 'react'
import Dots from '/src/assets/icons/dots.svg?react';
import styles from './MenuDots.module.scss';

const MenuDots:React.FC = () => {
  return (
    <div className={styles.dotsWrapper}>
        <Dots className={styles.dots}/>
    </div>
  )
}

export default MenuDots