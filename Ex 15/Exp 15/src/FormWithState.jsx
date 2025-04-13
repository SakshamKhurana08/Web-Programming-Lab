import React, { useState } from 'react';

const FormWithState = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Form with useState</h2>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br /><br />
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br /><br />
            <button type="submit">Submit</button>

            <div style={{ marginTop: '20px' }}>
                <strong>Live Preview:</strong><br />
                Name: {name} <br />
                Email: {email}
            </div>
        </form>
    );
};

export default FormWithState;
