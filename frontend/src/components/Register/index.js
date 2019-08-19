import React, { useState } from 'react';

import logo from '../../assets/drug_store.png';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import './style.css';

export default function Register({history}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');
    const [userTerms, setUserTerms] = useState(false);

   /*Criar on Submit*/
   async function handleSubmit(e) {
       e.preventDefault();

       const response = await api.post('/register', {
           name: name,
           username: username,
           email: email,
           password: password,
           confirm: confirm
       });

       console.log(response.data)
       const { _id } = response.data;

       history.push(`/dev/${ _id }`);

       console.log(history);
   }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} >
                <Link to="/">
                    <img
                        src={logo} 
                        alt="Drug Store"
                    />
                </Link>

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
                    type="password"
                    placeholder="Digite sua senha"
                    alt="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type="password"
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
