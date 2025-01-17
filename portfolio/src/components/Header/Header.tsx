import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.scss';

import Logo from '/src/assets/icons/code.png';

interface HeaderProps {
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { toggleTheme } = themeContext;

  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      {/* 왼쪽 메뉴 */}
      <div className={styles.menu}>
        <img className={styles.logo} src={Logo} alt='logo'/>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </div>

      {/* 가운데 타이틀 */}
      <div className={styles.title}>
        <p>Kim SeungSub Portfolio - Visual Studio Code Theme</p>
      </div>

      {/* 오른쪽 명령 버튼 */}
      <div className={styles.commands}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Header;
