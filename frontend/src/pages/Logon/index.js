import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api'

import './style.css'

import imgHeroes from '../../assets/heroes.png'
import imgLogo from '../../assets/logo.svg'

export default function Logon(){
    const history = useHistory();
    const [ id, setId ] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch(err) {
            alert('ID não encontrado');
        }
        

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={imgLogo} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value = {id}
                        onChange = {e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={imgHeroes} alt="Heroes"/>

        </div>
    );
}