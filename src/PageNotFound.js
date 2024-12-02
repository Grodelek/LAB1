import React from 'react';

function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404: Strona nie została znaleziona</h1>
      <p style={styles.message}>Ups! Przepraszamy, ale nie możemy znaleźć strony, której szukasz.</p>
      <a href="/" style={styles.link}>Wróć na stronę główną</a>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '3rem',
    color: '#d9534f',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#555',
  },
  link: {
    fontSize: '1.1rem',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  linkHover: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default PageNotFound;
