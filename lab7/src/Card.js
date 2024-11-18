import React from 'react';

const Card = ({ title, content, onAction }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onAction}>Perform Action</button>
        </div>
    );
};

export default Card;
