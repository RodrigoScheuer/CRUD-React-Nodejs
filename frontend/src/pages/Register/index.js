import React, { useState } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        if (!name || !email || !whatsapp || !city || !uf) {
            alert('Complete todos os campos para ralizar o cadastro.');
            return;
        }

        const data = { name, email, whatsapp, city, uf }

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso ${response.data.id}`);

            history.push('/');
        } catch (e) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, sua ONG pode fazer a diferença!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Logon
                     </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input
                            placeholder="cidade"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />

                        <input
                            placeholder="UF"
                            minLength="2"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={(e) => setUf(e.target.value)} />
                    </div>

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}