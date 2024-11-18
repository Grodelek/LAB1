import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Komponent do wyświetlania informacji o użytkowniku
const UserInfo = ({ name, age, email, address, status, updateUserData }) => {
    return (
        <div className="user-info">
            <h2>Imię: {name}</h2>
            <p>Wiek: {age}</p>
            <p>Email: {email}</p>
            <p>Adres: {address}</p>
            <p>Status: <strong>{status}</strong></p>

            <button onClick={() => updateUserData()}>Zaktualizuj dane</button>
        </div>
    );
};

const App = () => {
    const [user, setUser] = useState({
        name: 'Jan Kowalski',
        age: 30,
        email: 'jan.kowalski@example.com',
        address: 'ul. Przykładowa 10, Warszawa',
        status: 'aktywny'
    });

    const updateUserData = () => {
        // Symulacja edycji danych
        setUser({
            ...user,
            name: 'Anna Nowak',
            age: 28,
            status: 'nieaktywny'
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Witaj w aplikacji!</h1>

                <UserInfo
                    name={user.name}
                    age={user.age}
                    email={user.email}
                    address={user.address}
                    status={user.status}
                    updateUserData={updateUserData}
                />

            </header>
        </div>
    );
};

export default App;
