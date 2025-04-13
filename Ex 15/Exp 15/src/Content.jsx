import React, { useState } from 'react';

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

const Content = () => {
    const [joke, setJoke] = useState('');

    const handleJoke = () => {
        const random = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(random);
    };

    return (
        <main>
            <button onClick={handleJoke}>Tell me a joke!</button>
            <p>{joke}</p>
        </main>
    );
};

export default Content;
