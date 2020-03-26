import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function Register() {
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

                <form>
                    <input placeholder="Nome da ONG" />
                    <input placeholder="E-mail" type="email" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}