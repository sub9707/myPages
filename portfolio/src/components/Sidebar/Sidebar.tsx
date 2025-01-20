import React, { useState } from 'react';
import styles from './Sidebar.module.scss';


import Pages from '/src/assets/icons/pages.svg?react';
import Search from '/src/assets/icons/search.svg?react';
import Git from '/src/assets/icons/git.svg?react';
import Bug from '/src/assets/icons/bug.svg?react';
import Profile from '/src/assets/icons/profile.svg?react';
import Setting from '/src/assets/icons/setting.svg?react';
import GeneralModal from '../Common/GeneralModal';
import SettingModalContent from './SettingModalContent';

interface SidebarProps {
  theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>('pages');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <>
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
            onClick={() => setIsModalOpen(true)} // Setting 버튼 클릭 시 모달 열기
          >
            <Setting
              className={`${styles.icon} ${activeIcon === 'setting' ? styles.iconActive : ''}`}
            />
          </li>
        </ul>
      </div>

      {/* 설정창 모달 */}
      <GeneralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="설정"
        showFooterButtons={{ confirm: false, cancel: false }}
      >
        <SettingModalContent/>
      </GeneralModal>
    </>
  );
};

export default Sidebar;
