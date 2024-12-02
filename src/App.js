import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// Import komponentów
import Lab7 from './components/Lab7/Lab7';
import Lab8 from './components/Lab8/Lab8';
import Lab9 from './components/Lab9/Lab9';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/lab7" style={styles.navLink}>Lab 7</Link></li>
          <li style={styles.navItem}><Link to="/lab8" style={styles.navLink}>Lab 8</Link></li>
          <li style={styles.navItem}><Link to="/lab9" style={styles.navLink}>Lab 9</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/lab9" />} />
        <Route path="/lab7" element={<Lab7 />} />
        <Route path="/lab8" element={<Lab8 />} />
        <Route path="/lab9/*" element={<Lab9 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(82,84,147,0.5)',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    backgroundColor: 'rgba(221,222,248,0.5)',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '800px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0',
    margin: '0',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#555',
  },
};

export default App;
