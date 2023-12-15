import React, {useState} from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Register clicked');
    };

    return(
        <div>
            <h2>Register</h2>
            <form>
                <label> Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='button' onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default Register;