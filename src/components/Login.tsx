import React, { useState } from 'react'
import axios from 'axios';

interface Login {}

const Login = ({}: Login) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        axios.post(
            'http://localhost:8000/api/user/login', 
            { email, password },
            { withCredentials: true }
        ).then(response => {
            console.log(response.data);
        }).then(error => {
            console.log(error)
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />

                <button>Login</button>
            </form>

        </div>
    )
}

export default Login
