import React, { useContext, useState } from 'react';
import styles from './SettingModalContent.module.scss';

import Sun from '/src/assets/icons/sun.svg';
import Moon from '/src/assets/icons/moon.svg';
import { ThemeContext } from '../../context/ThemeContext';

const SettingModalContent: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themes, setThemes] = useState('Theme 1');
  const [fontSize, setFontSize] = useState('medium');
  const [font, setFont] = useState('Font A');

  const handleToggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (!themeContext) {
    throw new Error('SettingModalContent must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div className={styles.container}>
      {/* 다크/라이트 모드 */}
      <div className={styles.section}>
        <h3 className={styles.title}>다크/라이트 모드</h3>
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            className={styles.toggleCheckbox}
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <div className={styles.toggleSlot}>
            <div className={styles.sunIconWrapper}>
              <img src={Sun} className={styles.sunIcon} alt="light mode" />
            </div>
            <div className={styles.toggleButton}></div>
            <div className={styles.moonIconWrapper}>
              <img src={Moon} className={styles.moonIcon} alt="dark mode" />
            </div>
          </div>
        </label>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>테마 설정</h3>
        <select
          value={theme}
          onChange={(e) => {
            if (e.target.value === 'dark' && theme !== 'dark') {
              toggleTheme();
            } else if (e.target.value === 'light' && theme !== 'light') {
              toggleTheme();
            }
          }}
          className={styles.selectBox}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>폰트 크기</h3>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className={styles.selectBox}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>폰트 설정</h3>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className={styles.selectBox}
        >
          <option value="Font A">Font A</option>
          <option value="Font B">Font B</option>
          <option value="Font C">Font C</option>
        </select>
      </div>
    </div>
  );
};

export default SettingModalContent;
