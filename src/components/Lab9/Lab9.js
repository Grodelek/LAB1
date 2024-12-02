import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import Favorite from './components/Favorite';
import Contact from './components/Contact';
import PageNotFound from '../../PageNotFound';


function Lab9() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/lab9/" style={styles.navLink}>O mnie</Link></li>
          <li style={styles.navItem}><Link to="/lab9/interests" style={styles.navLink}>Moje zainteresowania</Link></li>
          <li style={styles.navItem}><Link to="/lab9/favorite" style={styles.navLink}>Ulubiony film/gra</Link></li>
          <li style={styles.navItem}><Link to="/lab9/contact" style={styles.navLink}>Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="interests" element={<Interests />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#2163ef',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  nav: {
    backgroundColor: '#2163ef',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Lab9;
