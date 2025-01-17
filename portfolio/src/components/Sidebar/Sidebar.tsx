import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

import Pages from '/src/assets/icons/pages.svg?react';
import Search from '/src/assets/icons/search.svg?react';
import Git from '/src/assets/icons/git.svg?react';
import Bug from '/src/assets/icons/bug.svg?react';
import Profile from '/src/assets/icons/profile.svg?react';
import Setting from '/src/assets/icons/setting.svg?react';

interface SidebarProps {
  theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
  // 클릭된 아이콘을 추적하는 상태
  const [activeIcon, setActiveIcon] = useState<string | null>('pages');

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={`${styles.sidebar} ${styles[theme]}`}>
      <ul>
        <li
          className={activeIcon === 'pages' ? styles.active : ''}
          onClick={() => handleIconClick('pages')}
        >
          <Pages
            className={`${styles.icon} ${activeIcon === 'pages' ? styles.iconActive : ''}`}
          />
        </li>
        <li
          className={activeIcon === 'search' ? styles.active : ''}
          onClick={() => handleIconClick('search')}
        >
          <Search
            className={`${styles.icon} ${activeIcon === 'search' ? styles.iconActive : ''}`}
          />
        </li>
        <li
          className={activeIcon === 'git' ? styles.active : ''}
          onClick={() => handleIconClick('git')}
        >
          <Git
            className={`${styles.icon} ${activeIcon === 'git' ? styles.iconActive : ''}`}
          />
        </li>
        <li
          className={activeIcon === 'bug' ? styles.active : ''}
          onClick={() => handleIconClick('bug')}
        >
          <Bug
            className={`${styles.icon} ${activeIcon === 'bug' ? styles.iconActive : ''}`}
          />
        </li>
      </ul>
      <ul>
        <li
          className={activeIcon === 'profile' ? styles.active : ''}
        >
          <Profile
            className={`${styles.icon} ${activeIcon === 'profile' ? styles.iconActive : ''}`}
          />
        </li>
        <li
          className={activeIcon === 'setting' ? styles.active : ''}
        >
          <Setting
            className={`${styles.icon} ${activeIcon === 'setting' ? styles.iconActive : ''}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
