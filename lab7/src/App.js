import React from 'react';
import logo from './logo.svg';
import './App.css';

const UserInfo = (props) => {
  return (
      <div>
        <h2>Imię: {props.name}</h2>
        <p>Wiek: {props.age}</p>
      </div>
  );
};

const App = () => {
  const user = {
    name: 'Jan Kowalski',
    age: 30
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Witaj w aplikacji!</h1>

          <UserInfo name={user.name} age={user.age} />

          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
};

export default App;
