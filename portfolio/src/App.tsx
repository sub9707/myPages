import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Explorer from './components/Explorer/Explorer';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import styles from './App.module.scss';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const ThemedApp: React.FC = () => {
  const context = React.useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useContext가 ThemeProvider 내에서 사용되지 않음');
  }

  const { theme } = context;

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <Header theme={theme} />
      <div className={styles.contentWrapper}>
        <Sidebar theme={theme} />
        <Explorer theme={theme} />
        <MainContent theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default App;