import React, { useState } from 'react';
import './FormAtualiza.css';

function FormAtualiza() {
  const [formValores, setFormValores] = useState({
    id: '',
    Cor: '',
    Placa: '',
    Chassi: '',
    Modelo: '',
    Marca: '',
    Valor: '',
    Ano: '',
    Consultor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados:", formValores);
      const response = await fetch(`http://localhost:3000/carro/{formValores.id}`, {
        method: 'UPDATE', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValores), 
      });

      if (!response.ok) {
        const errorMessage = `Erro ao enviar dados: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const json = await response.json();
      console.log('Resposta do servidor:', json);
    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="id" className="label">ID a ser Atualizado:</label>
        <input type="text" id="id" name="id" value={formValores.id} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Cor" className="label">Cor:</label>
        <input type="text" id="Cor" name="Cor" value={formValores.Cor} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Placa" className="label">Placa:</label>
        <input type="text" id="Placa" name="Placa" value={formValores.Placa} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Chassi" className="label">Chassi:</label>
        <input type="text" id="Chassi" name="Chassi" value={formValores.Chassi} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Modelo" className="label">Modelo:</label>
        <input type="text" id="Modelo" name="Modelo" value={formValores.Modelo} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Marca" className="label">Marca:</label>
        <input type="text" id="Marca" name="Marca" value={formValores.Marca} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Valor" className="label">Valor:</label>
        <input type="text" id="Valor" name="Valor" value={formValores.Valor} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Ano" className="label">Ano:</label>
        <input type="text" id="Ano" name="Ano" value={formValores.Ano} onChange={handleChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="Consultor" className="label">Consultor:</label>
        <input type="text" id="Consultor" name="Consultor" value={formValores.Consultor} onChange={handleChange} className="input-field" />
      </div>
      <button type="submit" className="button">Atualizar</button>
    </form>
  );
}

export default FormAtualiza;
