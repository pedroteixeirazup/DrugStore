import React, { useState } from 'react'

import logo from '../../assets/drug_store.png';

import './style.css';

export default function Login() {
    const [username, setUsername] =   useState('');
    const [ password, setPassword] = useState('');
    /*Criar on Submit*/

        return (
            <div className="login-container">
                <form onSubmit="">
                    <img
                       src={logo} 
                       alt="Drug Store"
                    />
                    <input 
                        placeholder="Entre com seu usuário"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Entre com sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                    <label>
                        <p>Cadastrar</p>
                        <p id="forgot-password">Esqueceu sua senha?</p>
                    </label>
        
                </form>
            </div>
        );
}
