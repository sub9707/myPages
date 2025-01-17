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
  const { theme } = React.useContext(ThemeContext);

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
