import React from 'react'
import styles from './ProfileModalContent.module.scss';

import ProfileImage from '/src/assets/images/profile-default.jpg';
import GithubLight from '/src/assets/icons/github_light.svg';
import GithubDark from '/src/assets/icons/github_dark.svg';
import Youtube from '/src/assets/icons/youtube.svg';
import { ThemeContext } from '../../context/ThemeContext';

const ProfileModalContent: React.FC = () => {
    const context = React.useContext(ThemeContext);

    if (!context) {
        throw new Error('useContext가 ThemeProvider 내에서 사용되지 않음');
    }

    const { theme } = context;
    return (
        <div className={`${styles.modalWrapper} ${styles[theme]}`}>
            <div className={styles.imageWrapper}>
                <img className={styles.profileImage} src={ProfileImage} alt='profile-image' />
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.subHeader}>이름</div>
                <div className={styles.infoDetail}>김승섭</div>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.subHeader}>E-mail</div>
                <div className={styles.infoDetail}>sub9707@naver.com</div>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.subHeader}>Github</div>
                <div className={styles.infoDetail}>
                    <div className={styles.linkAnchor} onClick={() => window.open('http://www.github.com/sub9707')}>
                        <img src={theme == 'light' ? GithubDark : GithubLight } alt='github' />
                        <p>깃허브</p>
                    </div>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.subHeader}>Youtube</div>
                <div className={styles.infoDetail}>
                    <div className={styles.linkAnchor} onClick={() => window.open('http://www.youtube.com')}>
                        <img src={Youtube} alt='youtube' />
                        <p>학습 유튜브</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModalContent