import React from 'react';

function AboutMe() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>O mnie</h1>
            <p>
                Cześć! Nazywam się Artur Grodel i jestem studentem trzeciego roku informatyki stosowanej.
            </p>
            <p>
                Moim celem jest doskonalenie umiejętności związanych z tworzeniem logiki biznesowej, zarządzaniem bazami danych, a także integracją różnych usług i API. Z każdym projektem staram się zgłębiać zagadnienia związane z wydajnością i bezpieczeństwem, ponieważ te aspekty są kluczowe w profesjonalnym rozwoju backendu. W przyszłości chciałbym również eksperymentować z mikroserwisami i architekturą chmurową, aby jeszcze lepiej dopasować aplikacje do dynamicznych wymagań współczesnego rynku.            </p>
            <h2>Moje umiejętności</h2>
            <ul>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>Java</li>
                <li>Symfony</li>
                <li>PHP</li>
            </ul>
            <h2>Zainteresowania</h2>
            <p>
                Oprócz programowania interesuję się:
            </p>
            <ul>
                <li>Sportem</li>
                <li>Grami komputerowymi</li>
            </ul>
            <h2>Kontakt</h2>
            <p>
                Prosze wiadomości wysyłać w zakładce Kontakt!
            </p>
        </div>
    );
}

export default AboutMe;
