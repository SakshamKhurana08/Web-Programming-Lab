import React, { useRef, useState } from 'react';

const FormWithRef = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        setSubmittedData({ name, email });
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Form with useRef</h2>
            <input type="text" placeholder="Enter name" ref={nameRef} /><br /><br />
            <input type="email" placeholder="Enter email" ref={emailRef} /><br /><br />
            <button type="submit">Submit</button>

            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <strong>Submitted Data:</strong><br />
                    Name: {submittedData.name} <br />
                    Email: {submittedData.email}
                </div>
            )}
        </form>
    );
};

export default FormWithRef;
