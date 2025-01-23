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
import ProfileModalContent from './ProfileModalContent';

interface SidebarProps {
  theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>('pages');
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); 

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
            onClick={()=>setIsProfileModalOpen(true)}
          >
            <Profile
              className={`${styles.icon} ${activeIcon === 'profile' ? styles.iconActive : ''}`}
            />
          </li>
          <li
            className={activeIcon === 'setting' ? styles.active : ''}
            onClick={() => setIsSettingModalOpen(true)}
          >
            <Setting
              className={`${styles.icon} ${activeIcon === 'setting' ? styles.iconActive : ''}`}
            />
          </li>
        </ul>
      </div>

      {/* 프로필 모달 */}
      <GeneralModal
        isOpen={isProfileModalOpen}
        onClose={()=>setIsProfileModalOpen(false)}
        title='프로필'
        showFooterButtons={{confirm:false, cancel:false}}
        size={'large'}
      >
        <ProfileModalContent/>
      </GeneralModal>
      {/* 설정창 모달 */}
      <GeneralModal
        isOpen={isSettingModalOpen}
        onClose={() => setIsSettingModalOpen(false)}
        title="설정"
        showFooterButtons={{ confirm: false, cancel: false }}
        size={'medium'}
      >
        <SettingModalContent/>
      </GeneralModal>
    </>
  );
};

export default Sidebar;
