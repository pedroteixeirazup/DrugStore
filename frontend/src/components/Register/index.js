import React, { useState } from 'react';

import logo from '../../assets/drug_store.png';

import './style.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');
    const [userTerms, setUserTerms] = useState(false);

   /*Criar on Submit*/

    return (
        <div className="register-container">
            <form >
                <img
                    src={logo} 
                    alt="Drug Store"
                />
                <p>Bem vindo ao cadastro da Drug Store, complete os campos a seguir!</p>
                <input 
                    placeholder="Digite seu melhor e-mail"
                    alt="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Digite seu nome de usuário"
                    alt="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    placeholder="Digie seu nome inteiro"
                    alt="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    placeholder="Digite sua senha"
                    alt="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    placeholder="Confirme sua senha"
                    alt="Confirm Password"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                />

                <label>
                    <input type="checkbox" alt="Terns of user" value={userTerms} onChange={e => setUserTerms(true)}/> 
                    <p>Aceito os termos de usuário</p>   
                </label>
            
                <button type="submit">Enviar</button>
             

            </form>
        </div>
    )
}
