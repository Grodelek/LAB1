import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

const AppContext = createContext();

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

const App = () => {
    const [name, setName] = useState('');
    const [showCounter, setShowCounter] = useState(true);

    const [count, dispatch] = useReducer(counterReducer, 0);

    const inputRef = useRef(null);
    const renderCount = useRef(0);

    const contextValue = { count, dispatch };

    useEffect(() => {
        renderCount.current += 1;
        console.log(`Name updated: ${name}`);
    }, [name]);

    useEffect(() => {
        console.log('Komponent zamontowany');
        return () => console.log('Komponent odmontowany');
    }, []);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div style={{ padding: '16px' }}>
                <h1>Demonstracja hooków React</h1>

                <div>
                    <h2>useState</h2>
                    <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Wpisz swoje imię"
                    />
                    <button onClick={focusInput}>Ustaw focus</button>
                    <p>Twoje imię: {name}</p>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <h2>useReducer</h2>
                    <h3>Licznik: {count}</h3>
                    <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>Zresetuj</button>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <h2>useContext</h2>
                    <CounterDisplay />
                </div>

                <div style={{ marginTop: '16px' }}>
                    <h2>useRef</h2>
                    <p>Liczba renderów: {renderCount.current}</p>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <h2>useEffect</h2>
                    <button onClick={() => setShowCounter(!showCounter)}>
                        {showCounter ? 'Ukryj licznik' : 'Pokaż licznik'}
                    </button>
                    {showCounter && <CounterDisplay />}
                </div>
            </div>
        </AppContext.Provider>
    );
};

const CounterDisplay = () => {
    const { count } = useContext(AppContext);
    return <h3>Globalny licznik: {count}</h3>;
};

export default App;
