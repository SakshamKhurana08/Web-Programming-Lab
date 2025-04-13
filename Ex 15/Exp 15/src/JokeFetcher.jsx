import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
    const [joke, setJoke] = useState(null);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(data);
        } catch (error) {
            console.error('Failed to fetch joke:', error);
            setJoke({ setup: 'Oops!', punchline: 'Failed to load joke 😢' });
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Random Joke Generator</h2>
            {joke ? (
                <>
                    <p><strong>{joke.setup}</strong></p>
                    <p>{joke.punchline}</p>
                </>
            ) : (
                <p>Loading joke...</p>
            )}
            <button onClick={fetchJoke} style={{ marginTop: '20px' }}>
                Get New Joke
            </button>
        </div>
    );
};

export default JokeFetcher;
