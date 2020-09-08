import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [descripition, setDescripition] = useState('');
  const [value, setValue] = useState('');
  
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleIncident(e) {
    e.preventDefault();

    const data = {
      title,
      descripition,
      value
    };

    try {
      api.post('incidents', data, {
        headers:{
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Falha no cadastro, tente novamente');
    }

  }

  return (
    <div className="new-incidents-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreve detalhamente para encotrar um heroi para resolver o caso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descricao"
            value={descripition}
            onChange={e => setDescripition(e.target.value)}
          ></textarea>
          <input
            placeholder="valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}