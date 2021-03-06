import React, { useState, useEffect } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const [insidents, setInsidents] = useState([]);

    // é executado sempre que tiver alteração nas dependencias [ongId]
    // aqui é executado somente uma vez na inicialização
    useEffect(() => {
        api.get('ongs/incidents', { headers: { authorization: ongId, } }).then(response => setInsidents(response.data));
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, { headers: { authorization: ongId, } });

            setInsidents(insidents.filter(i => i.id !== id));
        } catch (e) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    function handleLogout(params) {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span>Bem vindo a {ongName}</span>

                <Link className="button" to="/incidents/new" > Cadastrar novo caso </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {insidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}