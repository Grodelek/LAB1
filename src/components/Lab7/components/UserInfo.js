import React, { useContext, useRef } from 'react';
import { UserContext } from '../Lab7.js';

const UserInfo = () => {
  const user = useContext(UserContext);
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
      <div style={styles.container}>
        <h2 style={styles.header}>Informacje o Użytkowniku</h2>
        <p style={styles.text}>Imię: <span style={styles.boldText}>{user.name}</span></p>
        <p style={styles.text}>Wiek: <span style={styles.boldText}>{user.age}</span></p>
        <p style={styles.text}>Email: <span style={styles.boldText}>{user.email}</span></p>

        <div style={styles.inputContainer}>
          <input
              ref={inputRef}
              type="text"
              placeholder="Wpisz coś..."
              style={styles.input}
          />
          <button onClick={handleFocus} style={styles.button}>Ustaw Fokus</button>
        </div>
      </div>
  );
};

// Inline styles
const styles = {
  container: {
    backgroundColor: '#f4f7fc',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '30px auto',
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 600,
  },
  text: {
    fontSize: '1.2rem',
    color: '#34495e',
    marginBottom: '12px',
    lineHeight: '1.5',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#16a085',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '25px',
    gap: '15px',
  },
  input: {
    padding: '12px 20px',
    fontSize: '1rem',
    border: '1px solid #bdc3c7',
    borderRadius: '8px',
    width: '80%',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#16a085',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1rem',
    backgroundColor: '#16a085',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#1abc9c',
    transform: 'scale(1.05)',
  },
};

export default UserInfo;
