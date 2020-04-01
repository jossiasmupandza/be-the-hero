import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    return (
      <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero"/>

            <h1>Cadastro</h1>
            <p>
              Face su cadastro, entre naplataforma e ajude pessoas a encotrar
              uma ONG.
            </p>

            <Link className="back-link" to="/">
              <FiArrowLeft size="16" color="#E02041" />
              Voltar para o logon
            </Link>
          </section>

          <form >
            <input placeholder="Nome da ONG"/>
            <input type="email" placeholder="-Email"/>
            <input placeholder="Whatsapp"/>
            
            <div className="input-group">
                <input placeholder="Cidade"/>
                <input placeholder="UF" style={{ width: 80}}/>
            </div>

            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
}