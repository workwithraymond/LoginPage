import React, {useState} from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('Login clicked');
    }

    return (
        <div className='main'>
            <h2  style={{textAlign: 'center', fontSize: '3.5em', color: 'white'}}>Login</h2>
            <form>
                <label htmlFor='chk' aria-hidden='true'>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <br /> 
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>
                <br />
                <button type='button' onClick={handleLogin}>Login</button>
            </form>
        </div>
    );

};

export default Login;