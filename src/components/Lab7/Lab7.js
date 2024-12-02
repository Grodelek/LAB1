import React, { useState, useReducer, useEffect, createContext } from 'react';
import UserInfo from './components/UserInfo';

export const UserContext = createContext();

const Lab7 = () => {
  const [showUserInfo, setShowUserInfo] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW':
        return { ...state, show: !state.show };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { show: true });

  const user = {
    name: 'Artur Grodel',
    age: 23,
    email: '20299@student.ans-elblag.pl'
  };

  useEffect(() => {
    console.log('App component mounted or updated');
    return () => {
      console.log('App component unmounted');
    };
  }, [showUserInfo, state.show]);

  return (
    <UserContext.Provider value={user}>
      <div style={styles.container}>
        <h1 style={styles.header}>Moja Aplikacja</h1>

        <div style={styles.buttonContainer}>
          <button onClick={() => setShowUserInfo(!showUserInfo)} style={styles.button}>
            {showUserInfo ? 'Ukryj informacje o użytkowniku' : 'Pokaż informacje o użytkowniku'}
          </button>
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={() => dispatch({ type: 'TOGGLE_SHOW' })} style={styles.button}>
            {state.show ? 'Ukryj komponent' : 'Pokaż komponent'}
          </button>
        </div>

        {showUserInfo && <UserInfo />}
        {state.show && <p style={styles.text}>Komponent!</p>}
      </div>
    </UserContext.Provider>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  buttonContainer: {
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    textAlign: 'center',
  },
};

export default Lab7;
